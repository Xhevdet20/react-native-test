import React, {useState} from 'react';
import {Button, Modal, Portal, TextInput, Title} from 'react-native-paper';
import styles from './AddNewJobsiteModal.styles';
import {JobSite} from '../../screens/Login/JobSites';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

interface Props {
  visible: boolean;
  hideModal: () => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filteredData: any;
  setFilteredData: React.Dispatch<React.SetStateAction<JobSite[]>>;
}

function AddNewJobsiteModal(props: Props): JSX.Element {
  const categories = [
    {
      label: 'Category 1',
      value: 'Category 1',
      key : 100
    },
    {
      label: 'Category 2',
      value: 'Category 2',
      key: 101
    },
  ];

  const [statusForm, setStatusForm] = useState('');
  const [nameForm, setNameForm] = useState('');
  const [openDropDown, setOpenDropDown] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [categoryItems, setCategoryItems] = useState(categories)

  const handleStatusInputChange = (text: string) => {
    setStatusForm(text);
  };

  const handleNameInputChange = (text: string) => {
    setNameForm(text);
  };

  const addNewJobsite = () => {
    if(nameForm.length < 3){
      return;
    }
    props.setSearchText('');
    let newSite: JobSite = {
      id: (props.filteredData.length + 1).toString(),
      title: nameForm,
      status: 'New',
      color: '#EE8A35',
    };
    props.setFilteredData([newSite,...props.filteredData ]);
    props.hideModal();
    setCategoryValue(null);
    setNameForm("");
  };

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.hideModal}
        contentContainerStyle={containerStyle}>
        <SafeAreaView>
          <Title>Title</Title>
          <TextInput
            label="Name"
            value={nameForm}
            onChangeText={handleNameInputChange}
            mode="outlined"
          />

          <DropDownPicker
            style={styles.dropDown}
            dropDownContainerStyle={{width: '100%'}}
            open={openDropDown}
            value={categoryValue}
            items={categoryItems}
            setOpen={setOpenDropDown}
            setValue={setCategoryValue}
            setItems={setCategoryItems}
          />

          {/* <TextInput
            label="Status"
            value={statusForm}
            onChangeText={handleStatusInputChange}
            mode="outlined"
          /> */}
         <View style={styles.buttons}>
         <Button mode='contained'  onPress={props.hideModal} buttonColor="rgba(254, 76, 74, 1)">Cancel</Button>
          <Button mode='contained' onPress={addNewJobsite} buttonColor='rgba(18, 100, 163, 1)'>Submit</Button>
         </View>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}

export default AddNewJobsiteModal;

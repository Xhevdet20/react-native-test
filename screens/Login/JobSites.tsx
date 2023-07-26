import CheckBox from '@react-native-community/checkbox';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import styles from './JobSites.styles';
import InfoCardLst from '../../components/InfoCardList';
import Header from '../../components/Header';
import SearchBar from 'react-native-search-bar';
import {Table, Row} from 'react-native-reanimated-table';
import JobSiteCard from '../../components/JobSiteCard';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

function JobSites(props: Props): JSX.Element {
  const NewStatus = () => (
    <View style={styles.new}>
      <Text style={{textAlign: 'center', color : 'white'}}> New </Text>
    </View>
  );

  const UnderJudgementStatus = () => (
    <View style={styles.underJudgement}>
      <Text style={{textAlign: 'center', color : 'white'}}> Under judgement </Text>
    </View>
  );

  const OpenStatus = () => (
    <View style={styles.open}>
      <Text style={{textAlign: 'center', color : 'white'}}> Open </Text>
    </View>
  );

  const ClosedStatus = () => (
    <View style={styles.closed}>
      <Text style={{textAlign: 'center', color : 'white'}}> Closed </Text>
    </View>
  );

  const tableHeaders = ['Nr', 'Jobsite', 'Status'];
  const tableData = [
    ['1', 'Broadway, Queens, NY', <NewStatus />],
    ['2', 'Main Street, Brooklyn', <NewStatus />],
    ['3', 'Lexinton Aveue, Manhattan', <UnderJudgementStatus />],
    ['4', 'Park Place, Bronx', <UnderJudgementStatus />],
    ['5', 'Riverside Drive, Staten Island', <OpenStatus />],
    ['6', 'Union Street, Queens', <OpenStatus />],
    ['7', 'Fulton Street, Brooklyn', <OpenStatus />],
    ['8', 'Madison Avenue, Manhattan', <ClosedStatus />],
    ['9', 'Broadway, Bronx, NY',  <ClosedStatus />],
    ['10', 'Central Avenue, Staten Island',  <ClosedStatus />],
    ['11', 'Broadway, Queens, NY',  <ClosedStatus />],
    ['12', 'Lexington Avenue, Manhattan', <ClosedStatus />],
    ['13', 'Park Place, Bronx, NY',  <ClosedStatus />],
    ['14', 'Riverside Drive, Staten Island',  <ClosedStatus />],
    ['15', 'Main Street, rooklyn',  <ClosedStatus />],
    ['16', 'Union Street, Queens, NY',  <ClosedStatus />],
  ];

  const dummyData = [
    ['1', 'Broadway, Queens, NY', "New"],
    ['2', 'Main Street, Brooklyn', "New"],
    ['3', 'Lexinton Aveue, Manhattan', "Under Judgement"],
    ['4', 'Park Place, Bronx', "Under Judgement"],
    ['5', 'Riverside Drive, Staten Island', "Open"],
    ['6', 'Union Street, Queens', "Open"],
    ['7', 'Fulton Street, Brooklyn', "Open"],
    ['8', 'Madison Avenue, Manhattan', "Closed"],
    ['9', 'Broadway, Bronx, NY',  "Closed"],
    ['10', 'Central Avenue, Staten Island',  "Closed"],
    ['11', 'Broadway, Queens, NY',  "Closed"],
    ['12', 'Lexington Avenue, Manhattan', "Closed"],
    ['13', 'Park Place, Bronx, NY',  "Closed"],
    ['14', 'Riverside Drive, Staten Island',  "Closed"],
    ['15', 'Main Street, rooklyn',  "Closed"],
    ['16', 'Union Street, Queens, NY',  "Closed"],
  ];

  

  console.log(tableData[0])

  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filteredTableData = tableData.filter(row => {
      const rowData = row.join(' ').toLowerCase();
      return rowData.includes(text.toLowerCase());
    });
    setFilteredData(filteredTableData);
  };

  return (
    <ScrollView
      style={{backgroundColor: '#EFEFF4'}}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View>
          <Header />
          <InfoCardLst />
          <View>
            <Text>Title</Text>
            <View style={styles.tableContainer}>
              <Text>
                Informative piece of text that can be used regarding this modal.
              </Text>
              <SearchBar
                placeholder="Search"
                onChangeText={handleSearch}
                // value={searchText}
              />

              <JobSiteCard data={dummyData[0]} />
              
              
              {/* <Table>
                <Row
                  data={tableHeaders}
                  style={styles.tableHeader}
                  flexArr={[1, 5, 3]}
                />

                {filteredData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    style={styles.tableRow}
                    flexArr={[1, 5, 3]}
                    // textStyle={index == 0 ?  {textAlign : 'center'} : null}
                  />
                ))}
              </Table> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default JobSites;

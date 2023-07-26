import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from './JobSites.styles';
import Header from '../../components/Header';
import JobSiteCard from '../../components/JobSiteCard';
import InfoCardList from '../../components/InfoCardList';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

function JobSites(props: Props): JSX.Element {
  const dummyDataObj: JobSite[] = [
    {id: '1', title: 'Broadway, Queens, NY', status: 'New', color: '#EE8A35'},
    {id: '2', title: 'Main Street, Brooklyn', status: 'New', color: '#EE8A35'},
    {
      id: '3',
      title: 'Lexinton Aveue, Manhattan',
      status: 'Under Judgement',
      color: '#B3D99B',
    },
    {
      id: '4',
      title: 'Park Place, Bronx',
      status: 'Under Judgement',
      color: '#B3D99B',
    },
    {
      id: '5',
      title: 'Riverside Drive, Staten Island',
      status: 'Open',
      color: '#E9C466',
    },
    {id: '6', title: 'Union Street, Queens', status: 'Open', color: '#E9C466'},
    {
      id: '7',
      title: 'Fulton Street, Brooklyn',
      status: 'Open',
      color: '#E9C466',
    },
    {
      id: '8',
      title: 'Madison Avenue, Manhattan',
      status: 'Closed',
      color: '#7AC14D',
    },
    {id: '9', title: 'Broadway, Bronx, NY', status: 'Closed', color: '#7AC14D'},
    {
      id: '10',
      title: 'Central Avenue, Staten Island',
      status: 'Closed',
      color: '#7AC14D',
    },
    {
      id: '11',
      title: 'Broadway, Queens, NY',
      status: 'Closed',
      color: '#7AC14D',
    },
    {
      id: '12',
      title: 'Lexington Avenue, Manhattan',
      status: 'Closed',
      color: '#7AC14D',
    },
    {
      id: '13',
      title: 'Park Place, Bronx, NY',
      status: 'Closed',
      color: '#7AC14D',
    },
    {
      id: '14',
      title: 'Riverside Drive, Staten Island',
      status: 'Closed',
      color: '#7AC14D',
    },
    {
      id: '15',
      title: 'Main Street, Brooklyn',
      status: 'Closed',
      color: '#7AC14D',
    },
    {
      id: '16',
      title: 'Union Street, Queens, NY',
      status: 'Closed',
      color: '#7AC14D',
    },
  ];

  interface JobSite {
    id: string;
    title: string;
    status: string;
    color: string;
  }

  const countStatusesWithColor = (
    data: JobSite[],
  ): {
    type: string;
    count: number;
    color: string;
}[] => {
    const statusCount: {[key: string]: {count: number; color: string}} = {};
    data.forEach(item => {
      const {status, color} = item;
      statusCount[status] = {
        count: (statusCount[status]?.count || 0) + 1,
        color: color || 'orange',
      };
    });

    const resultArray: { type: string; count: number; color: string }[] = Object.keys(statusCount).map((status) => ({
      type: status,
      count: statusCount[status].count,
      color: statusCount[status].color,
    }));
    return resultArray;
  };

  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState(dummyDataObj);
  const [statuses, setStatues] = useState([{"color": "#EE8A35", "count": 0, "type": "New"}, {"color": "#B3D99B", "count": 0, "type": "Under Judgement"}, {"color": "#E9C466", "count": 0, "type": "Open"}, {"color": "#7AC14D", "count": 0, "type": "Closed"}]);

  useEffect(() => {
    const resultWithColor = countStatusesWithColor(dummyDataObj);
    setStatues(resultWithColor)
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filteredTableData = dummyDataObj.filter(element => {
      const rowData = (element.title + ' ' + element.status).toLowerCase();
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
          <Header handleSearch={handleSearch} searchText={searchText} />
          <InfoCardList statuses={statuses}/>
          <View>
            <Text>Title</Text>
            <View style={styles.tableContainer}>
              <Text>
                Informative piece of text that can be used regarding this modal.
              </Text>

              {filteredData.map((element, index) => (
                <JobSiteCard data={element} index={index} />
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default JobSites;

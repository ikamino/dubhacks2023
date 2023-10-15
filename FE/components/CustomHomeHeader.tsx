import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { User } from '../types/types';
import FilterIcon from '../icons/Slider.svg'
import FilterModal from './filterModal';

interface HeaderProps {
  title: string;
  user?: string;
}

const HomeHeader: React.FC<HeaderProps> = ({ title, user }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User>({id: 'temp', name: 'Undefined'})
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    setData({
      id: 'user1',
      name: 'Eric'
    })
    setLoading(false)
  }, [user]);

  return (
    <View style={styles.header}>
      <View style={styles.headerUserInfo} >
        <View style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          flexDirection: 'row', 
          alignItems: 'baseline',
          width: '100%',
        }}>
          {/* <Text style={styles.headerMessage}>Welcome back,</Text> */}
          <Text style={styles.headerMessage}>{loading ? '' : `Welcome back, ${data.name}!`}</Text>
          <Text style={{fontSize: 12, fontWeight: '500'}}>Are you an owner?</Text>
        </View>
      </View>
      <View style={{
        marginTop: 15, 
        justifyContent: 'space-between',
        width: '100%', 
        display: 'flex', 
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          backgroundColor: "#F3F3F3",
          borderRadius: 20,
          width: 270,
          paddingRight: 6
        }}>
          <TextInput style={{
          width: 240, 
          height: 32, 
          paddingLeft: 10
          }}/>
          <TouchableOpacity onPress={() => setIsFilterModalOpen(true)}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={{
          width: 70, 
          height: 32, 
          backgroundColor: "#F3F3F3",
          borderRadius: 20, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',

        }}>
          <Text style={{fontSize: 15, fontWeight: '500', color: '#D9D9D9'}}>Search</Text>
        </TouchableOpacity>
      </View>
      <FilterModal isVisible={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Vertically align text
    alignItems: "center",
    width: '100%',
    marginTop: 26,
    // backgroundColor: 'green'
  },
  headerUserInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 'auto'
  },
  headerMessage: {
    color: 'black', // Text color
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 6
  },
  headerName: {
    fontSize: 15,
    color: 'black',
    marginRight: 'auto',
    fontWeight: "bold",
  },
  headerImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 4
  },

});

export default HomeHeader;

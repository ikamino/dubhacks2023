import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, Button, TextInput } from 'react-native';
import axios from 'axios';
import Star from '../icons/star.svg'
import Location from '../icons/Location.svg'
import CalendarPicker from 'react-native-calendar-picker';
import CanadianFlag from '../icons/CanadianFlag.svg'
import { LinearGradient } from 'expo-linear-gradient';
import PlusIcon from '../icons/PlusIcon.svg'

interface ListingModalProps {
    isVisible: boolean;
    onClose: () => void;
    id: string | undefined
}

const TOP_MARGIN = 0; // Adjust this value as needed

const ListingModal: React.FC<ListingModalProps> = ({
    isVisible,
    onClose,
    id
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0)


  const fetchParkingLot = async () => {
    setRefreshing(true);
    // const res = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/api/user-notifications/${user}`)
    const res = {
        id: 'lot3', 
        title: 'lot3',
        imagein: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        hostId: 'lot3', 
        address: 'Seattle, Washington',
        pricePerHour: 14,
        isAvailable: true,
        rating: 5.0,
        parkingRate: 14,
        description: "The highlight of this home is its large garage, boasting two parking spaces designed to comfortably accommodate two SUVs. The garage is not only spacious but also equipped with automatic doors, providing you with both security and convenience."
    }
  }

  useEffect(() => {
    fetchParkingLot();
  }, [])

  const onRefresh = React.useCallback(() => {
    // fetchParkingLot()
  }, []);

  const handleFormSubmit = () => {
    // You can handle form submission here, for example, by sending the data to an API or performing some action.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <>
      {<Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Create a listing</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => { onClose() }}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          <View style={[styles.modalContent, { marginTop: TOP_MARGIN }]}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>

                    <TouchableOpacity style={{
                        borderStyle: 'dashed',
                        borderColor: '#A2A2A2',
                        borderWidth: 3,
                        width: 342,
                        height: 330,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 25, fontWeight: '500'}}>Upload a photo</Text>
                        <PlusIcon width={'40'} height={'40'}/>
                    </TouchableOpacity>

                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 16, justifyContent: 'center', alignItems: 'center',}}>
                            <Location width={'17'} height={'20'} />
                            <Text style={{marginLeft: 6, fontSize: 20, fontWeight: '500', }}>Seattle, Washington</Text>
                            <Text style={{color: '#3888FF', fontSize: 12, fontWeight: '500', marginLeft: 32}}>Change</Text>
                    </View>

                </View>
                <Text style={{fontSize: 20, fontWeight: '500', marginTop: 16}}>Set Rent Rate</Text>

                <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                    <Text style={{fontSize: 15, fontWeight: '500', marginRight: 8}}>$</Text>
                    <TextInput style={{width: 226, height: 36, backgroundColor: '#F3F3F3', borderRadius: 20, paddingLeft: 10}}/>
                    <Text style={{fontSize: 15, fontWeight: '500', marginLeft: 8, marginRight: 8}}>/</Text>
                    <TextInput style={{width: 72, height: 36, backgroundColor: '#F3F3F3', borderRadius: 20,  paddingLeft: 10}}/>
                </View>

                <Text style={{fontSize: 20, fontWeight: '500', marginTop: 28}}>Number of Lots</Text>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 22}}>
                    <TouchableOpacity onPress={() => setSelectedNumber(1)} style={selectedNumber == 1 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 1 ? styles.selectedText : {fontSize: 15}}>1</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedNumber(2)} style={selectedNumber == 2 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 2 ? styles.selectedText : {fontSize: 15}}>2</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedNumber(3)} style={selectedNumber == 3 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 3 ? styles.selectedText : {fontSize: 15}}>3</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedNumber(4)} style={selectedNumber == 4 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 4 ? styles.selectedText : {fontSize: 15}}>4</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedNumber(5)} style={selectedNumber == 5 ? styles.selectedCircle : styles.circleButton}><Text style={selectedNumber == 5 ? styles.selectedText : {fontSize: 15}}>5+</Text></TouchableOpacity>
                </View>

                <Text style={{fontSize: 20, fontWeight: '500', marginTop: 28}}>Description</Text>
                <TextInput style={{
                    width: 342, 
                    height: 220, 
                    marginTop: 8,
                    backgroundColor: "#F3F3F3", 
                    padding: 8, 
                    borderRadius: 20
                }}
                editable
                multiline
                />

                <LinearGradient
                    colors={["#BB77FF", '#77A5FF',  "#77FFC6"]}
                    start={{ x: 0, y: 0.6 }}
                    end={{ x: 0.9, y: 0 }}
                    style ={{width: 134, height: 42, borderRadius: 32, marginTop: 32, marginBottom: 64, alignItems: 'center', justifyContent: 'center', marginLeft: 108}}
                >
                    
                    <TouchableOpacity onPress={() => {}} style={{width: 134, height: 42,borderRadius: 32, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white'}}>Create a listing</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
            </ScrollView>
          </View>
        </View>
      </Modal>}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFCF4',
    marginTop: 50,
    display: 'flex',
  },
  modalContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF4',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    // borderBottomWidth: 1,
    // borderColor: '#ccc',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },selectedText: {
    color: 'white',
    fontSize: 15
  },
  circleButton: {
    height: 45, 
    width: 45, 
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedCircle: {
    height: 45, 
    width: 45, 
    borderRadius: 50, 
    borderColor: 'black', 
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

});

export default ListingModal;

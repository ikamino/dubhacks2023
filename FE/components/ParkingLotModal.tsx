import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, Button, TextInput } from 'react-native';
import axios from 'axios';
import Star from '../icons/star.svg'
import Location from '../icons/Location.svg'
import CalendarPicker from 'react-native-calendar-picker';

interface ParkingLotModalProps {
    isVisible: boolean;
    onClose: () => void;
    id: string | undefined
}

const TOP_MARGIN = 0; // Adjust this value as needed

const ParkingLotModal: React.FC<ParkingLotModalProps> = ({
    isVisible,
    onClose,
    id
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState({
    id: 'lot3', 
    title: 'lot3',
    imagein: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    hostId: 'lot3', 
    address: 'Seattle, Washington',
    pricePerHour: 14,
    isAvailable: true,
    rating: 5.0,
    parkingRate: 14,
    description: 'The highlight of this home is its large garage, boasting two parking spaces designed to comfortably accommodate two SUVs. The garage is not only spacious but also equipped with automatic doors, providing you with both security and convenience.'
  })

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

    if (res) {
      setData(res)
      setRefreshing(false)
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
      {id && <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { marginTop: TOP_MARGIN }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Details</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => { onClose() }}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.lotInfo}>
                <Image style={styles.modalImage} source={{ uri: data.imagein }}/>
                    <View style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'baseline', marginTop: 16}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Location width={'17'} height={'20'} />
                            <Text style={{marginLeft: 6, fontSize: 20, fontWeight: '500', }}>Seattle, Washington</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Star width={'15'} height={'15'} />
                            <Text>{data.rating}</Text>
                        </View>
                    </View>

                    <Text style={{fontSize: 20, fontWeight: '500', width: '100%', marginTop: 32}}>{data.title}</Text>


                    {/* <Text style={{fontSize: 28, fontWeight: '700', width: '100%', marginTop: 12, marginBottom: 12}}>{data.title}</Text> */}
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline', width: '100%', marginTop: 16}}>
                        <Text style={{fontWeight: '700', fontSize: 25}}>${data.parkingRate}</Text>
                        <Text>/hr</Text>
                    </View>
                    {/* <View style={{borderBottomWidth: 1, borderColor: 'lightgrey', width: 350, marginTop: 12}}/> */}
                    <Text style={{width: '100%', marginTop: 12, fontSize: 15, fontWeight: '500'}}>{data.description}</Text>
                    {/* <View style={{borderBottomWidth: 1, borderColor: 'lightgrey', width: 350, marginTop: 16, marginBottom: 6}}/> */}
                    <Text style={{fontSize: 20, fontWeight: '500', width: '100%', marginTop: 16}}>Rent a Lot</Text>
                    <CalendarPicker
                    // onDateChange={this.onDateChange}
                        width={100}
                        height={100}
                        selectedDayColor={'#F3F3F3'}	
                    />
                </View>
                <View style={{
                    position: 'relative',
                    display: 'flex', 
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderColor: 'black',
                    borderRadius: 8,
                    borderWidth: 1,
                    width: 350,
                    marginLeft: 24,
                    marginBottom: 24
                }}>
                    <View style={{
                        display: 'flex', 
                        width: '100%', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        marginLeft: 48,
                        marginBottom: 24,
                        marginTop: 12
                    }}>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>{data.parkingRate}</Text>
                        <Text style={{fontSize: 18}}>/Hour</Text>
                    </View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Enter your name"
                    />

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        placeholder="Enter your phone number"
                        keyboardType="phone-pad"
                    />

                    {/* <Button title="Submit" onPress={handleFormSubmit} /> */}
                    <TouchableOpacity style={{
                        height: 40,
                        width: '80%',
                        borderRadius: 50,
                        
                        overflow: "hidden",
                        backgroundColor: 'blue',
                    }}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
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
    alignItems: 'center',
    backgroundColor: '#FFFCF4',
    marginTop: 50,
    display: 'flex',
    alignContent: 'center'
  },
  notificationIndicator: {
    borderRadius: 50,
    width: 8,
    height: 8,
    position: "absolute",
    right: 4,
    top: 14,
    backgroundColor: '#FFFCF4'
  },
  modalContent: {
    flex: 1,
    width: '100%',
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
    marginLeft: 140
  },
  lotInfo: {
    paddingBottom: 20,
    marginTop: 10,
    marginLeft: 24,
    marginRight: 24,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  notificationItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
  modalImage: {
    width: 345,
    height: 345,
    borderRadius: 25
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 48
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10
  },

});

export default ParkingLotModal;

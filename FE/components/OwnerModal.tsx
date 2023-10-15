import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, ScrollView, RefreshControl, Button, TextInput } from 'react-native';
import Star from '../icons/star.svg'
import Location from '../icons/Location.svg'
import CalendarPicker from 'react-native-calendar-picker';
import CanadianFlag from '../icons/CanadianFlag.svg'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import ListingModal from './ListingModal';
import GradientLogo from '../icons/Rent-a-Lot.svg'

interface OwnerModalProps {
    isVisible: boolean;
    onClose: () => void;
    id: string | undefined
}

const TOP_MARGIN = 0; // Adjust this value as needed

const OwnerModal: React.FC<OwnerModalProps> = ({
    isVisible,
    onClose,
    id
}) => {
  const [name, setName] = useState('');
  const [isListingModalOpen, setIsListingModalOpen] = useState(false)

  const [time, setTime] = useState(Date.now());

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
          <View style={[styles.modalContent]}>
            <TouchableOpacity onPress={onClose} style={{width: '100%', justifyContent: 'flex-start', marginLeft: 40,}}>
                <Text style={{fontSize: 12, fontWeight: '500'}}>Are you a renter?</Text>
            </TouchableOpacity>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                <GradientLogo />
                <Text style={{fontSize: 30, fontWeight: '500'}}>Make a Lot.</Text>
                <View style={{alignItems: 'center', marginTop: 200}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Burnaby BC, Canada</Text>
                    <TouchableOpacity>
                        <Text style={{color: "#3888FF", fontSize: 12, fontWeight: '500' }}>Change Location</Text>
                    </TouchableOpacity>
                </View>

                <LinearGradient
                    colors={["#BB77FF", '#77A5FF',  "#77FFC6"]}
                    start={{ x: 0, y: 0.6 }}
                    end={{ x: 0.9, y: 0 }}
                    style ={{width: 220, height: 42, borderRadius: 32, marginTop: 100}}
                >
                    
                    <TouchableOpacity onPress={() => setIsListingModalOpen(true)} style={{width: 220, height: 42, alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{color: 'white'}}>Create a listing</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
            </View>
            <ListingModal isVisible={isListingModalOpen} onClose={() => setIsListingModalOpen(false)} id={id}/>
            </View>
            
        </View>
      </Modal>}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFCF4',
    marginTop: 50,
    display: 'flex',
    width: '100%'
  },
  modalContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFCF4',
    marginTop: 20
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
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },

});

export default OwnerModal;

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import LotList from '../components/LotList';
import ParkingLotModal from '../components/ParkingLotModal';
import FilterModal from '../components/filterModal';
// import ListingService from 'BE/src/services/ListingService';
// import Listing from 'BE/src/models/Listing';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        height: '100%',
        // backgroundColor: 'white'
    },
    listItem: {
        padding: 16,
        // backgroundColor: '#FFFCF4',
        marginBottom: 8,
        borderRadius: 8,
        height: "100%",
        width: 180
    },
    listItemImage: {
        width: 65,
        height: 65,
        borderRadius: 50
    },
    listSubOptions: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    listItemCrown: {
        fontSize: 45
    },
    redCircle: {
        width: 10,
        height: 10,
        borderRadius: 25,
        backgroundColor: 'red',
    },
    greenCircle: {
        width: 10,
        height: 10,
        borderRadius: 25,
        backgroundColor: 'green',
    },
    flatListContainer: {
        maxHeight: "30%"
    }
});

interface IHome {
    user: string;
    refetch: () => void
}

const lots = [
    {
        id: 'lot1', 
        title: 'Lot near downtown Seattle',
        imagein: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        hostId: 'lot1', 
        address: 'Seattle, Washington',
        pricePerHour: 13,
        isAvailable: true,
        rating: 3.7,
        parkingRate: 5,
        description: 'The highlight of this home is its large garage, boasting two parking spaces designed to comfortably accommodate two SUVs. The garage is not only spacious but also equipped with automatic doors, providing you with both security and convenience.',
        tags: ['short', 'lot']
    },
    {
        id: 'lot2', 
        title: 'Parking near Husky stadium 5 min walk',
        imagein: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
        hostId: 'lot2', 
        address: 'University of Washington',
        pricePerHour: 35,
        isAvailable: true,
        rating: 4.6,
        parkingRate: 35,
        description: 'hihi',
        tags: ['Day']
    },
    {
        id: 'lot3', 
        title: 'Cute house near kits beach',
        imagein: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        hostId: 'lot3', 
        address: 'Vancouver, BC',
        pricePerHour: 14,
        isAvailable: true,
        rating: 4.9,
        parkingRate: 9,
        description: 'aokfmef',
        tags: ['month', 'long']
    },
]

const PickLot = () => {

}

const Home = ({ user, refetch }: IHome) => {
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(false);
    const [selectedParkinglot, setSelectedParkingLot] = useState<string | undefined>()
    // const [data, setData] = useState(res);
    
    const [isParkingLotModalOpen, setIsParkingLotModalOpen] = useState(false);


    const selectParkingLot = (id: string) => {
        setLoading(true)
        setSelectedParkingLot(id);
        setIsParkingLotModalOpen(true);
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <>
                    <View style={{ 
                        bottom: -10, 
                        paddingEnd: 0,
                        height: 600, 
                        flex: 1, 
                        flexDirection: "row", 
                        alignItems: "flex-end", 
                        columnGap: 20, 
                        flexWrap: "wrap", 
                        justifyContent: "center" 
                    }}>
                            <LotList lots={lots} selectLot={selectParkingLot}/>
                            <ParkingLotModal id={selectedParkinglot} isVisible={isParkingLotModalOpen} onClose={() => setIsParkingLotModalOpen(false)}/>
                        
                    </View>
                </>
            )}
        </View>
    );
};

export default Home;
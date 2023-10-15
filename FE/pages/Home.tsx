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
import ListingService from 'BE/src/services/ListingService';
import Listing from 'BE/src/models/Listing';

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
        rating: 5.0,
        parkingRate: 13,
        description: 'The highlight of this home is its large garage, boasting two parking spaces designed to comfortably accommodate two SUVs. The garage is not only spacious but also equipped with automatic doors, providing you with both security and convenience.'
    },
    {
        id: 'lot2', 
        title: 'lot2',
        imagein: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        hostId: 'lot2', 
        address: 'lot2',
        pricePerHour: 15,
        isAvailable: true,
        rating: 5.0,
        parkingRate: 15,
        description: 'hihi'
    },
    {
        id: 'lot3', 
        title: 'lot3',
        imagein: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        hostId: 'lot3', 
        address: 'lot3',
        pricePerHour: 14,
        isAvailable: true,
        rating: 5.0,
        parkingRate: 14,
        description: 'aokfmef'
    },
]

const PickLot = () => {

}

const Home = ({ user, refetch }: IHome) => {
    const listingService = new ListingService();
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(false);
    const [selectedParkinglot, setSelectedParkingLot] = useState<string | undefined>()
    const [data, setData] = useState(
    listingService.getListings().then((res: Listing[]) => {
        setData(res);
    }));
    
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
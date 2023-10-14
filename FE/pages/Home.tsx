import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "auto",
        height: '100%',
        backgroundColor: '#FFFCF4'
    },
    listItem: {
        padding: 16,
        backgroundColor: '#FFFCF4',
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
}

const Home = ({ user }: IHome) => {
    const isFocused = useIsFocused();
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

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
                        {
                            <Text>hihi</Text>
                        }
                    </View>
                </>
            )}
        </View>
    );
};

export default Home;
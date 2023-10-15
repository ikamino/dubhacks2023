import React from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ParkingSpace } from '../types/types';
import Star from '../icons/star.svg'
import Location from '../icons/Location.svg'
import { DayTermTag, LongTermTag, LotTag, MonthTermTag, ShortTermTag, WeekTermTag, returnTag } from './Tags';


interface ILotList {
    lots: ParkingSpace[]
    selectLot: (id: string) => void
}

const LotList = ({ lots, selectLot }: ILotList) => {

    const styles = StyleSheet.create({
        container: {
            alignSelf: "flex-end",
            display: "flex",
            width: '90%',
            borderTopLeftRadius: 20,
            borderTopEndRadius: 20,
            // backgroundColor: '#FFFCF4',
            boxShadow: "3px 4px 15px 2px rgba(0,0,0,0.66)",
        },
        listItemShadow: {
            shadowColor: '#212121',
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 6,
        },
        lotCard: {
            borderRadius: 8,
            marginBottom: 8,
            boxShadow: "3px 4px 15px 2px rgba(0,0,0,0.66)",
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            textDecoration: 'none',
            // backgroundColor: 'blue'

        },
        lotCardContent: {
            padding: 8,
            background: 'white',

        },
        lotCardTitle: {
            fontSize: 20,
            fontWeight: '500',

        },
        lotCardFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,

        },
        lotCardStarContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
        },
        lotCardStarIcon: {
            width: 16,
            height: 16,
            marginRight: 8,
            color: 'red',
        },
        lotImage: {
            height: 200,
            width: '100%',
            borderRadius: 25
        },
        parkingRateContainer: {
            fontSize: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        parkingRate: {
            fontWeight: '700',
            fontSize: 20,
        }
    })


    return (
        <View style={[styles.container, styles.listItemShadow]}>
            <FlatList
                data={lots}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {selectLot(item.id)}}>
                        <View style={styles.lotCard}>
                            <Image style={styles.lotImage} source={{ uri: item.imagein }}/>
                            <View style={styles.lotCardContent}>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 4}}>
                                    <Location width={'15'} height={'17'} />
                                    <Text style={{marginLeft: 8, fontSize: 15, fontWeight: '500', marginRight: 8}}>
                                        {item.address}
                                    </Text>
                                    <View style={{display: 'flex', flexDirection: 'row', gap: 4}}>
                                        {item.tags.map((tag) => returnTag(tag))}
                                    </View>
                                </View>
                                <Text style={styles.lotCardTitle}>{item.title}</Text>
                                <View style={styles.lotCardFooter}>
                                    <View style={styles.parkingRateContainer}>
                                        <Text style={styles.parkingRate}>${item.parkingRate}</Text>
                                        <Text>/hr</Text>
                                    </View>
                                    <View style={styles.lotCardStarContainer}>
                                        <Text>{item.rating}</Text>
                                        <Star width={'15'} height={'15'} />
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View >
    )
}

export default LotList
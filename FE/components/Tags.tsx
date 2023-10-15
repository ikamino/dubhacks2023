import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const LongTermTag = () => {
    return (
        <View style={{width: 72, 
            height: 22, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7CDCD'
            
        }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Long-term</Text>
        </View>
    )
}

export const ShortTermTag = () => {
    return (
        <View style={{width: 72, 
            height: 22, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D1FDC2'
            
        }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Short-term</Text>
        </View>
    )
}

interface ILotTag {
    lots: number
}

export const LotTag = (lots: ILotTag) => {
    return (
        <View style={{width: 72, 
            height: 22, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#A8D1D1'
            
        }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>{lots.lots} lot(s)</Text>
        </View>
    )
}

export const DayTermTag = () => {
    return (
        <View style={{width: 52, 
            height: 22, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#DFEBEB'
            
        }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Day</Text>
        </View>
    )
}

export const WeekTermTag = () => {
    return (
        <View style={{width: 52, 
            height: 22, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D1FDC2'
            
        }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Week</Text>
        </View>
    )
}

export const MonthTermTag = () => {
    return (
        <View style={{width: 52, 
            height: 22, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#C0D8C0'
            
        }}>
            <Text style={{fontSize: 12, fontWeight: '500'}}>Month</Text>
        </View>
    )
}

export const returnTag = (str: string) => {
    switch(str) {
        case 'short':
          return <ShortTermTag />
        case 'long':
          return <LongTermTag />
        case 'day':
          return <DayTermTag />
        case 'week':
          return <WeekTermTag />
        case 'month':
          return <MonthTermTag />
        default:
          return <LotTag lots={2}/>
      }
}
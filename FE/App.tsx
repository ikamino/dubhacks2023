import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from './components/Footer';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Home from './pages/Home';
import HomeHeader from './components/CustomHomeHeader';

import { Provider } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => {
  const [user, setUser] = useState<string | undefined>();
  const [lot, setLot] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const retrieveUser = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        setUser(value);
      } else {
        setUser(undefined); 
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const retrieveParkingLot = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem('lot');
      if (value !== null) {
        // We have data!!
        setLot(value);
      } else {
        setLot(undefined); 
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    retrieveUser();
  }, []);

  return (
    <SafeAreaProvider>
        {isLoading ?
          (
            <ActivityIndicator />
          ) :
          <NavigationContainer theme={MyTheme} >
            {user ?
              <Tab.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: 'white',
                }, headerShown: true
              }} tabBar={(props) => <Footer {...props} />}>
                <Tab.Screen name="Home" options={{
                  headerTitle: () => <HomeHeader title='hi' user={user} />, headerStyle: {
                    elevation: 0,
                    // borderBottomWidth: 0,
                    // backgroundColor: 'blue',
                    height: 200,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    shadowColor: '#212121',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 4,
                  }
                }}>
                  {(props) => <Home user={user} refetch={retrieveParkingLot}/>}
                </Tab.Screen>
                <Tab.Screen name="Inbox" children={(props) => <View></View>}/>
                <Tab.Screen name="Profile" children={(props) => <View></View>}/>
                <Tab.Screen name="Log Out" children={(props) => <SignOut {...props} refetch={retrieveUser} />} />
              </Tab.Navigator>
              : <Stack.Navigator>
                <Stack.Screen name="Sign In" children={(props) => <LinearGradient
                colors={['#FFFCF5', '#FFF6DE', '#FFEFC6']}
                style={{
                padding: 25,
                borderRadius: 20,
                height: '100%',
                }}
                ><SignIn {...props} refetch={retrieveUser} /></LinearGradient>} options={{headerShown: false}}/>
              </Stack.Navigator>}
          </NavigationContainer>
        }
    </SafeAreaProvider >
  );
};

export default App;
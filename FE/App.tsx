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
                  backgroundColor: '#FFFCF4'
                }, headerShown: true
              }} tabBar={(props) => <Footer {...props} />}>
                <Tab.Screen name="Home" options={{
                  headerTitle: () => <HomeHeader title='hi' user={user} />, headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    backgroundColor: '#FFFCF4'
                  }
                }}>
                  {(props) => <Home user={user} />}
                </Tab.Screen>
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
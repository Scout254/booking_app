import { View, Text } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Doctors from '../screens/Doctors';
import Home from '../screens/Home';

import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentDetails from '../screens/AppointmentDetails';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconText;
  
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
            iconText = focused ? 'Home' : '';
            return (
              <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: focused ? 'blue' : 'transparent' ,borderRadius:10,width:50,height:40,justifyContent:"center" }}>
              <MaterialCommunityIcons name={iconName} size={focused ? size + 1 : size} color={color} style={{ backgroundColor: focused ? 'blue' : 'transparent' }} />
              {/* <Text style={{ color: focused ? 'white' : 'black'}}>{iconText}</Text> */}
            </View>
            );
          } else if (route.name === 'Doctors') {
            iconName = focused ? 'stethoscope' : 'stethoscope';
            iconText = focused ? 'Doctors' : '';
            return (
              <View style={{ alignItems: 'center',flexDirection:"row",backgroundColor: focused ? "blue" :"transparent",borderRadius:10,width:50,height:40,justifyContent:"center" }}>
                <MaterialCommunityIcons name={iconName} size={focused ? size + 1 : size}color={color} style={{ backgroundColor: focused ? 'blue' : 'transparent' }} />
                {/* <Text style={{ color: focused ? 'white' : 'black' }}>{iconText}</Text> */}
              </View>
            );
          } else if (route.name === 'AppointmentDetails') {
            iconName = focused ? 'calendar-view-day' : 'calendar-view-day';
            iconText = focused ? 'Appointments' : '';
            return (
              <View style={{ alignItems: 'center',flexDirection:"row",backgroundColor: focused ? "blue" :"transparent",borderRadius:10,width:50,height:40,justifyContent:"center"}}>
                <MaterialIcons name={iconName} size={focused ? size + 1 : size} color={color} style={{ backgroundColor: focused ? 'blue' : 'transparent' }} />
                {/* <Text style={{ color: focused ? 'white' : 'black' }}>{iconText}</Text> */}
              </View>
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
            iconText = focused ? 'Profile' : '';
            return (
              <View style={{ alignItems: 'center' ,flexDirection:"row",backgroundColor: focused ? "blue" :"transparent",borderRadius:10,width:50,height:40,justifyContent:"center" }}>
                <Octicons name={iconName} size={focused ? size + 1 : size} color={color} style={{ backgroundColor: focused ? 'blue' : 'transparent' }} />
                {/* <Text style={{ color: focused ? 'white' : 'black' }}>{iconText}</Text> */}
              </View>
            );
          }
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
         
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Doctors' component={Doctors} />
      <Tab.Screen name='AppointmentDetails' component={AppointmentDetails} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
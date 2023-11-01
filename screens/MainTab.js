import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, ImageBackground} from 'react-native';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WriteScreen from './WriteScreen';
import SearchHeader from '../components/SearchHeader';
import CommunitySearchsScreen from './CommunitySearchsScreen';


const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name="Weather"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-pin-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CommunitySearchsScreen}
        options={{
          title: 'Search',
          tabbarIcon: ({color, size}) => (
            <Icon name="navigation" size={size} color={color} />
          ),
          headerTitle: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;

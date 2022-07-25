import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Search from '../../BottomTabScreens/Search';
import Order from '../../BottomTabScreens/Order';
import Account from '../../BottomTabScreens/Account';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Animated from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const Icon = props => (
  <View>
    <FontAwesome5
      name={props.icon}
      size={30}
      style={{
        marginBottom: 3,
        alignSelf: 'center',
        color: props.focused ? '#2e64e5' : 'grey',
      }}
    />
  </View>
);
export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffff',
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 10,
          maxHeight: 60,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          paddingHorizontal: 20,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="home" text="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="search" text="Browse" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="shopping-bag" text="Grocery" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="user" text="Account" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

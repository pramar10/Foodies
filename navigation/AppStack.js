import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RestaurantDetail from '../screens/RestaurantDetail';
import OrderCompleted from '../screens/OrderCompleted';
import Picker from '../screens/Picker';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {/* <Stack.Screen name="Image" component={Picker} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
    </Stack.Navigator>
  );
};

export default AppStack;

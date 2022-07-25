import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../redux/store';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import BottomTab from '../components/home/BottomTab';

const store = configureStore();

export default function RootNavigation() {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        {user ? <BottomTab /> : <AuthStack />}
      </NavigationContainer>
    </ReduxProvider>
  );
}

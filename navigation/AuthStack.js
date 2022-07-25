import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '529791717331-5v52gfr7914ssqg4jvl28prs9ebgsagk.apps.googleusercontent.com',
    });
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

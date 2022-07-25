import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/common/FormInput';
import FormButton from '../components/common/FormButton';
import SocialButton from '../components/common/SocialButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigation/AuthProvider';
import LottieView from 'lottie-react-native';
import Picker from './Picker';
const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register, user} = useContext(AuthContext);
  const registerHandler = () => {
    if (!email || !password || !confirmPassword)
      alert('Please fill all input section');
    else register(email, password);
  };
  return (
    <>
      <View style={styles.container}>
        <LottieView
          style={{height: 120}}
          source={require('../assets/animations/foodies.json')}
          autoPlay
          speed={1}
          loop={true}
        />
        <Text style={styles.text}>Create an account</Text>

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={confirmPassword}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton buttonTitle="Sign Up" onPress={() => registerHandler()} />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </View>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign Up with Facebook"
              btnType="facebook"
              color="#2d9a5b"
              backgroundColor="#d7f3e3"
              onPress={() => {}}
            />

            <SocialButton
              buttonTitle="Sign Up with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#278750',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2d9a5b',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

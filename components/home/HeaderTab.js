import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AuthContext} from '../../navigation/AuthProvider';
import LottieView from 'lottie-react-native';

const HeaderTab = props => {
  const {logout} = React.useContext(AuthContext);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={require('../../assets/images/user1.jpg')}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
              borderRadius: 100,
              left: 5,
            }}
          />
        </View>
        <Text
          style={{fontSize: 25, top: 12, color: '#2e64e5', fontWeight: '800'}}>
          Foodies
        </Text>
        <LottieView
          style={{height: 65}}
          source={require('../../assets/animations/uberEats.json')}
          autoPlay
          speed={0.5}
          loop={true}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <HeaderButton
          text="Delivery"
          btnColor="black"
          textColor="white"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
        <HeaderButton
          text="Pickup"
          btnColor="white"
          textColor="black"
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
        />
      </View>
    </>
  );
};

const HeaderButton = props => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab == props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
export default HeaderTab;

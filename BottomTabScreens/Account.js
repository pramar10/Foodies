import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AuthContext} from '../navigation/AuthProvider';

const Account = () => {
  const {logout} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: '700'}}>
          Hello John
        </Text>
        <View
          style={{
            height: 200,
            borderRadius: 20,
            width: '95%',
            overflow: 'hidden',
            marginTop: 20,
          }}>
          <Image
            source={require('../assets/images/user1.jpg')}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={{alignItems: 'center'}} onPress={() => logout()}>
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            backgroundColor: '#2e64e5',
            height: 50,
            width: 100,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              padding: 10,
              color: '#fff',
              fontSize: 20,
              fontWeight: '600',
            }}>
            {' '}
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={{marginTop: 15,marginBottom:15,marginLeft:10,flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Icon name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View style={{ 
              flexDirection:'row',
              marginRight:8,
              backgroundColor:'white',
              padding:9,
              borderRadius:30,
              alignItems:'center'
           }}>

              <AntDesign name='clockcircle' size ={11} style={{marginRight:6,color:'black'}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});

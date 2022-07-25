import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import FormButton from '../components/common/FormButton';

const Picker = () => {
  const [pic, setPic] = React.useState(
    'https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  );
  const takePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setPic(image.path);
    });
  };
  return (
    <View style={{width: '100%'}}>
      <Image
        source={{
          uri: pic,
        }}
        style={{
          height: 52,
          width: 50,
          zIndex: 1,
          position: 'absolute',
          borderRadius: 10,
          top: 10,
        }}
      />
      <FormButton buttonTitle={'Upload pic'} onPress={takePhoto} />
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]} {...rest} >
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          size={29}
          color={color}
          style={styles.icon}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText,{color:color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});

import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const Categories = () => {
  const items = [
    {
      image: require('../../assets/images/shopping-bag.png'),
      text: 'Pick-up',
    },
    {
      image: require('../../assets/images/soft-drink.png'),
      text: 'Soft Drinks',
    },
    {
      image: require('../../assets/images/bread.png'),
      text: 'Backery Items',
    },
    {
      image: require('../../assets/images/deals.png'),
      text: 'Fast Food',
    },
    {
      image: require('../../assets/images/coffee.png'),
      text: 'Coffee & Tea',
    },
    {
      image: require('../../assets/images/desserts.png'),
      text: 'Desserts',
    },
  ];

  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={{alignItems: 'center', marginRight: 30}} key={index}>
            <Image
              source={item.image}
              style={{width: 50, height: 40, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 13, fontWeight: '900', color: 'black'}}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

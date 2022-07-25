import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTab from '../components/home/HeaderTab';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, {
  localRestaurants,
} from '../components/home/RestaurantItems';
import {Divider} from 'react-native-elements';

const YELP_API_KEY =
  '_IXHxAN41Esb8_kyQU98od_NWVv9JXTUaY4iRQ3lmSN-sqGSKnaktZPqVog9m8q--qDYpb7qn8to9Ha-IMkfyz4yZi_8UO_eA93di7dwGfmGqfDO2shGKne6B5-hYnYx';

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [activeTab, setActiveTab] = React.useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood';
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        setRestaurantData(
          json.businesses.filter(business =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      );
  };
  React.useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab]);

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'white', top: 5}}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 60}}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

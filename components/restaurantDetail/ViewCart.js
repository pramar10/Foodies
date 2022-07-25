import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';

const ViewCart = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const addOrderToFirebase = async () => {
    setLoading(true);
    await firestore().collection('orders').add({
      items: items,
      restaurantName: restaurantName,
      createdAt: Date.now()
    }) .then(() => {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("OrderCompleted");
      }, 2500);
    });

  };
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 12,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}
              >
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 15,
                  }}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            zIndex: 999,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 12,
                borderRadius: 30,
                width: 300,
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 15,
              }}
              onPress={() => setModalVisible(true)}
              >
              <Text style={{color: 'white', fontSize: 20, marginRight: 50}}>
                View Cart
              </Text>
              <Text style={{color: 'white', fontSize: 20, marginRight: 10}}>
                $ {totalUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 400,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subTotalText: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 15,
    marginBottom: 10,
  },
});
export default ViewCart;

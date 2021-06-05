import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Footer from '../CarItem/Footer/Footer';
import CarsList from '../CarsList';
import Header from '../Header';
import Order from '../Order/Order';


const Home = () => {
    return (
        <View style={styles.container}>
            <Header></Header>
            <CarsList></CarsList>
            <Footer></Footer>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;
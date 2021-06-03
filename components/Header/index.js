import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>MightyRides</Text>
      <Image  source={require('../../assets/images/SolarRoof.jpeg')} />
    </View>
  );
};

export default Header;

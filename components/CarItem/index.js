import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        {/* <StyledButton

          type="primary"
          content={"Oreder Now"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        /> */}
        <Button style={styles.btn}
          type="primary"
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

    </View>
  );
};

export default CarItem;

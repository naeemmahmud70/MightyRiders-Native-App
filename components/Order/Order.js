import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

const Order = () => {
  const [text, onChangeText] = React.useState("Name");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.divbg}>
      <Text style={styles.text}>Place order details form</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="email"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ordered Item"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Price"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Location"
          keyboardType="numeric"
        />
        <Button
          title="Place Order"
          color="#841584"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  text: {
    fontSize: "40px",
    fontWeight: "bold"
  },
  divbg: {
    backgroundColor: "whitesmoke"
  }
});
export default Order;
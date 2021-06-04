import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';



const Footer = () => {
  const [text, onChangeText] = React.useState("Name");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.divbg}>
      <Text style={styles.text}>Stay Connect With Us</Text>
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
          placeholder="message"
          keyboardType="numeric"
        />
        <Button
          title="Send Message"
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

export default Footer;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
// import { NativeRouter, Route, Switch } from "react-router-native";
import Home from './components/Home/Home';

export default function App() {
  return (
    <View>
      <Home></Home>
    </View>
    // <NativeRouter>
    //   <View>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //     </Switch>
    //   </View>
    // </NativeRouter>
  );
}
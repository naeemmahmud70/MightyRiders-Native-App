import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from './components/Home/Home';
import Order from './components/Order/Order';

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Order" component={Order} />
        </Switch>
      </View>
    </NativeRouter>
  );
}
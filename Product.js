import React from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Switch, Route, Link, Router } from "react-router-native";


const Product = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
      <Link to="/">
              <Text>Go Home</Text>
            </Link>
    </View>
  );
}

export default Product;

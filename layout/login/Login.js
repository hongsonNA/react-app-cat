import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert,SafeAreaView } from 'react-native';
import { NativeRouter, Switch, Route, Link, Router } from "react-router-native";
import Home from '../Home';
import createHistory from 'history/createMemoryHistory';

// const history = createHistory();

const Login = ({ history })=>{
      return(
        <View style={styles.container}>
            <SafeAreaView style={styles.container}></SafeAreaView>
                <Image  source={{  uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }} style={{ width: 200, height: 200 }} />
            {/* <Text>Tài khoản</Text>
            <TextInput style={styles.styleTextInput}  defaultValue=""/>
            <Text>Password</Text>
            <TextInput style={styles.styleTextInput}  defaultValue="" />
            <StatusBar style="auto" /> */}
            {/* <Button onPress={() => history.push('/product')} style={styles.buttonLet} title="Let Go!!" /> */}
            <Link to="/product"><Text>Go to Other</Text></Link>
        </View>
    )
    
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop:'20%',
    backgroundColor: '#fff',
    color:'#F59B0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLet: {
    backgroundColor:'#000',
    color:'#F59B0C',
  },
  styleTextInput: {
    height: 40,
      width:'90%',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      marginBottom:10
  },
  styleButton: {
    borderColor: 'gray',
    color:"#841584",
    backgroundColor:"#007AFF"
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

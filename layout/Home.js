import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert,SafeAreaView } from 'react-native';


const Home = ({ history })=> {
  <ScrollView>
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  </ScrollView>
}

export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:'15%',
      backgroundColor: '#fff',
      color:'#F59B0C',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
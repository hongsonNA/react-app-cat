import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert,SafeAreaView } from 'react-native';


const Home = ({ history })=> {
  return(
    <ScrollView>
     <View style={styles.container}>
            <SafeAreaView style={styles.container}></SafeAreaView>
              <Image  source={{  uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }} style={{ width: 200, height: 200 }} />
              <Text> 🎉Wellcome to park animal 🎉</Text>
        </View>
  </ScrollView>
  )
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
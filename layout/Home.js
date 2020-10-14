import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert,SafeAreaView } from 'react-native';


const Home = ()=> {
  var story = [];
  for (let i = 0; i < 6; i++) {
    story.push(
      <Image  source={{uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p200x200/53014682_1993197010985402_6718108056795742208_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=hzPVydm3epwAX_idq9a&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=6e496fac4550d196df65490f288e7315&oe=5FAE0DAA',}} 
                style={styles.storyFeed} />
    );
  }
  return(
    <ScrollView>
     {/* <View style={styles.container}>
            <SafeAreaView style={styles.container}></SafeAreaView>
              <Image  source={{  uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }} style={{ width: 200, height: 200 }} />
              <Text> 🎉Wellcome to park animal 🎉</Text>
        </View> */}
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
        <SafeAreaView style={styles.container}></SafeAreaView>
        <View style={{height: 1,marginBottom:10, backgroundColor: '#E8E6FF'}} >
          <View style={{flex: 1, flexDirection: 'row'}}>
            {/* <View style={{width: '16.666%', height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: '16.666%', height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: '16.666%', height: 50, backgroundColor: 'steelblue'}} />
            <View style={{width: '16.666%', height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: '16.666%', height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: '16.666%', height: 50, backgroundColor: 'steelblue'}} /> */}
          </View>
        </View>
      </View>
      {/* */}
      <View style={{
                height: 'auto',
                backgroundColor: '#fff',
                flexDirection:'row',
                borderBottomColor:'#dadde1',
                borderBottomWidth:5,
                paddingBottom:10
                }} >
            <View style={{width: '20%', height: 50}}>
                <Image  source={{uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p200x200/53014682_1993197010985402_6718108056795742208_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=hzPVydm3epwAX_idq9a&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=6e496fac4550d196df65490f288e7315&oe=5FAE0DAA',}} 
                style={styles.imageUser} />
            </View>
            <View style={{width: '60%', height: 50}}>
              <TextInput style={styles.do_u_thing}>Bạn đang nghĩ gì?</TextInput>
             </View>
            <View style={{width: '20%', height: 50}} >
            <Image  source={{uri: 'https://camo.githubusercontent.com/f8ea5eab7494f955e90f60abc1d13f2ce2c2e540/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323037383234352f3235393331332f35653833313336322d386362612d313165322d383435332d6536626439353663383961342e706e67',}} 
                style={{ width:30,height:30,margin:20 }} />
            </View>
      </View>
      {/* kho luu tru */}
      <View style={{flex:1, flexDirection:'row',alignItems: "stretch" }}>
           <Text style={{padding:10, fontSize:14 }}>Tin</Text>
      </View>
      {/* story */}
      <View style={{flex: 1, flexDirection: 'row', paddingLeft:10,paddingRight:10}}>
      <ScrollView  horizontal={true}>
        <View style={{width: 50, height: 'auto',flex: 1, flexDirection: 'row', }}>
        {story}
        </View>
        {/* news feed */}
        <View>
            
        </View>
      </ScrollView>
       
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
    imageUser:{
        width: 40,
       height: 40,
       borderRadius:20,
       marginLeft:20,
       marginTop:5
    },
    do_u_thing:{
      borderColor: '#ccd0d5',
      borderWidth: 1,
      color:'#000',
      marginTop:15,
      width:'100%',
      borderRadius:20,
      padding:10
    },
    storyFeed:{
      width:90,
      height:160,
       borderRadius:15,
       marginRight:7,
    }
});
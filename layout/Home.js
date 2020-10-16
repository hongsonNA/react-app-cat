import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert,SafeAreaView } from 'react-native';
import NewsFeed from './page/NewsFeed';
import { Entypo } from '@expo/vector-icons'; 
import { Card, Block, theme,Icon  } from 'galio-framework';
const Home = ()=> {
  const defaultAvatar = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p200x200/53014682_1993197010985402_6718108056795742208_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=hzPVydm3epwAX_idq9a&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=6e496fac4550d196df65490f288e7315&oe=5FAE0DAA';
  const default_image = 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300';
  var story = [];
    for (let i = 0; i < 6; i++) {
      story.push(
        <Block key={i} style={{position: "relative"}}>
          <Image  source={{uri: defaultAvatar,}} style={styles.storyFeed} />
          <Block style={styles.borderStory}>
            {i==0 ?<Entypo name="plus"  size={24} color="black" /> : <Image style={{width:'100%', height:'100%', borderRadius:20}} source={{ uri: i % 2 ?defaultAvatar:default_image }} /> }
          </Block>
        </Block>
        
      );
    }
  return(
    <ScrollView>
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
      <Block>
        <View >
        <ScrollView  horizontal={true} >
          <View style={styles.storyList}>
          {story}
          </View>
        </ScrollView>
        {/* news feed */}
        <NewsFeed/>
        </View>
      </Block>
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
    },
    storyList:{
      width: '100%',
      height: 'auto',
      flex: 1,
      flexDirection: 'row',
      marginTop:0,
      borderBottomWidth:5,
      padding:10,
      paddingTop:0,
      paddingBottom:10,
      borderBottomColor:'#E0DEDE',
    },
    borderStory:{
      position:"absolute",
      top:5,left:5,
      width:30,height:30,
      borderRadius:20,
      borderWidth:3,
      borderColor:'#2E89FF'
    }
});
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert,SafeAreaView } from 'react-native';
import NewsFeed from './page/NewsFeed';
import { Card, Block, theme,Icon  } from 'galio-framework';

const Story = () =>{
    var story = [];
    for (let i = 0; i < 6; i++) {
      story.push(
        <Image  source={{uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p200x200/53014682_1993197010985402_6718108056795742208_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=hzPVydm3epwAX_idq9a&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=6e496fac4550d196df65490f288e7315&oe=5FAE0DAA',}} 
                  style={styles.storyFeed} />
      );
    }
    return(
        <ScrollView  horizontal={true} >
          <View style={styles.storyList}>
          {story}
          </View>
        </ScrollView>
    )
}
export default Story;
const styles = StyleSheet.create({
    storyList:{
      width: '100%',
      height: 'auto',
      flex: 1,
      flexDirection: 'row',
      marginTop:20,
      borderBottomWidth:5,
      padding:10,
      paddingBottom:10,
      borderBottomColor:'#E0DEDE',
    },
    storyFeed:{
        width:90,
        height:160,
         borderRadius:15,
         marginRight:7,
      },
});
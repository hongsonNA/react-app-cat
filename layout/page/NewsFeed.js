import { Card, Block, theme, Text,Icon  } from 'galio-framework';
import React from 'react';
import { StyleSheet,Image, Alert,ImageBackground,View} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Images } from '../constants/Images';
import { FontAwesome } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
const NewsFeed = () => {
    var card_news=[];
    for (let cart = 0; cart < 6; cart++) {
        card_news.push(
            <Block key = {cart}  style={styles.blockParentElemnt}>
                <Block row>
                    <Card flex borderless
                    title="Hồng Sơn"
                    caption="18 phút"
                    avatar='https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'
                    />
                </Block>
                <Text style={{padding:10,paddingTop:0}}>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker...</Text>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300'}}  style={styles.imageNewsFeed} />
                <Block style={{paddingRight:10,paddingLeft:10}}>
                    <Block  style={{paddingRight:10, paddingLeft:10,marginTop:15,marginBottom:10, flexDirection: 'row', justifyContent:'space-between'}}>
                        <Block row>
                            <AntDesign style={{paddingRight:4}} name="like2" size={16} color="black" />
                            <AntDesign name="smileo" size={16} color="black" />
                        </Block>
                        <Block row >
                            <Text style={{paddingRight:5}}>123 bình luận</Text>
                            <Text >69 chia sẻ</Text>
                        </Block>
                    </Block>
                    <Block  style={styles.commentShare}>
                        <Text> <AntDesign style={{paddingRight:4,paddingLeft:10}} name="like2" size={16} color="black" /> Thích </Text>
                        <Text> <EvilIcons name="comment" size={16} color="black" /> Bình luận </Text>
                        <Text> <FontAwesome name="share" size={16} color="black" /> Chia sẻ </Text>
                    </Block>
                </Block>
            </Block>
        )
    }
    return(
    <Block>
        {card_news}
    </Block>
    )
}
export default NewsFeed;
const styles = StyleSheet.create({
    cartNews:{
        borderRadius:10,
        padding:5,
    },
    newsFeedCustom:{
        margin:0,
        padding:0,
    },
    imageNewsFeed:{
        width:'100%',
        height:250,
        backgroundColor:'#000'
    },
    blockParentElemnt:{
        borderBottomColor:'#E0DEDE',
        borderBottomWidth:6,
    },
    likeBackground:{
        backgroundColor:'blue',  
    },
    commentShare:{
        borderTopColor:'#E0DEDE',
        borderTopWidth:1,
        padding:10,
        marginTop:0,
        marginBottom:5,
        
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});
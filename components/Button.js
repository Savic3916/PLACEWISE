import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Color from '@/constants/Color'

export default function Button({ hasIcon, imageSource, text, buttonContainerWIthIcon, 
                                    buttonContainerWIthoutIcons, textStyle, onPress }) {

  if(hasIcon === true){
        return (
            <Pressable style={({pressed}) => pressed? [buttonContainerWIthIcon, styles.pressed] : buttonContainerWIthIcon} 
                       onPress={onPress}  
            >
            <View style={styles.buttonView}>
                <Image style={styles.image} source={imageSource}/>
                <Text style={textStyle}>{text}</Text>
            </View>
            </Pressable>
        )
    }else{
        return (
            <Pressable style={({pressed}) => pressed? [buttonContainerWIthoutIcons, styles.pressed] : buttonContainerWIthoutIcons} 
                              onPress={onPress}>
                <Text style={textStyle}>{text}</Text>
            </Pressable>
        )
    }
}

const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({ 
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: deviceWidth < 321? 18 : 25,
        height: deviceWidth < 321? 18 : 25,
        marginRight: '20%',
    },
    pressed: {
        opacity: 0.65,
        overflow: 'hidden',
        backgroundColor: Color.green100,
    }
})
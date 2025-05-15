import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import { router } from 'expo-router';
import React from 'react'
import Color from '../../constants/Color'
import Slider from '../../components/Slider'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
  
export default function Login() {

  function signupPressedHandler(){
      router.replace('/auth/signup');
    };

  return (
    <View style={styles.container}>
      <View style={styles.upperTextContainer}>
        <Text style={styles.text}>GET STARTED FINDING</Text>
        <Text style={[styles.text, {fontSize: deviceWidth < 321? 14 : 16, letterSpacing: 0, fontFamily: 'Sedan-Italic', fontWeight: '100'}]}>a place that suits YOU!</Text>
      </View>
      <Slider>
        <Pressable style={({pressed}) => pressed? [styles.sliderInnerContainerSelected, styles.pressed] : styles.sliderInnerContainerSelected}>
          <Text style={styles.sliderText}> Login </Text>
        </Pressable>
        <Pressable style={({pressed}) => pressed? [styles.sliderInnerContainerNotSelected, styles.pressed] : styles.sliderInnerContainerNotSelected}
                   onPress={signupPressedHandler}
        >
          <Text style={{fontWeight: 'bold', fontSize: deviceWidth < 321? 13 : 15,}}> Register </Text>
        </Pressable>
      </Slider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.green50,
    padding: 10,
    paddingTop: 25,
  },
  upperTextContainer: {
    margin: '5%',
    alignItems: 'center'
  },
  text: {
    fontSize: deviceWidth < 321? 20 : 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  sliderInnerContainerSelected: {
    width: '50%',
    padding: deviceWidth < 321? 8 : 12,
    borderColor: Color.green300,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: Color.green300,
  },
  sliderInnerContainerNotSelected: {
    width: '50%',
    padding: deviceWidth < 321? 8 : 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: deviceWidth < 321? 13 : 15,
    color: 'white',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  }
})
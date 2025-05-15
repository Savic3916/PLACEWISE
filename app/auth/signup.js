import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import { router } from 'expo-router';
import React from 'react';
import Color from '../../constants/Color'
import Slider from '../../components/Slider';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
  
export default function SignUp() {

  function loginTextPressedHandler(){
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperTextContainer}>
        <Text style={styles.text}>Create an account</Text>
        <Text style={styles.smallerText}>Already have an account?
          <Pressable style={({pressed}) => pressed && styles.pressed} onPress={loginTextPressedHandler}>
            <Text style={{fontSize: deviceWidth < 321? 13 : 15, color: Color.green300, fontWeight: 'bold'}}>Log in</Text>
          </Pressable> 
        </Text>
      </View>
      <Slider>
        <Pressable style={({pressed}) => pressed? [styles.sliderInnerContainerNotSelected, styles.pressed] : styles.sliderInnerContainerNotSelected} 
          onPress={loginTextPressedHandler}
        >
          <Text style={{fontWeight: 'bold', fontSize: deviceWidth < 321? 13 : 15,}}> Login </Text>
        </Pressable>
        <Pressable style={({pressed}) => pressed? [styles.sliderInnerContainerSelected, styles.pressed] : styles.sliderInnerContainerSelected}>
          <Text style={styles.sliderText}> Register </Text>
        </Pressable>
      </Slider>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.green50,
    padding: 10,
    paddingTop: 25,
  },
  upperTextContainer: {
    alignItems: 'center'
  },
  text: {
    fontSize: deviceWidth < 321? 20 : 28,
    fontWeight: '600',
    letterSpacing: 2
  },
  smallerText: {
    fontSize: deviceWidth < 321? 12 : 16,
    color: Color.gray200,
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
    color: 'white',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  }
})
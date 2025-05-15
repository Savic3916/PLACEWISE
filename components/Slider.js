import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Color from '../constants/Color';

export default function Slider({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: Color.white,
      borderWidth: 2,
      borderRadius: 28,
      marginTop: '4%',
      backgroundColor: Color.white
    },
})
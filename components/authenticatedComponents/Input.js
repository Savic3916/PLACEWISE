import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ props }) {

  return (
    <View>
      <TextInput style={styles.input} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({})
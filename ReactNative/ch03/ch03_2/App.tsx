import React from 'react'
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text} from 'react-native'
import {MD2Colors} from 'react-native-paper'

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  safeAreaView: {backgroundColor: MD2Colors.blue500},
  text: {fontsize: 20, color: MD2Colors.blue200}
})
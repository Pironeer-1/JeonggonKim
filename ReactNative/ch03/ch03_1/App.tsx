import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {MD2Colors} from 'react-native-paper'

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView, {backgroundColor : 'blue'}]}>
      <Text style={[styles.text, {color: 'white'}]}>
        Hello StyleSheet world!
      </Text>
    </SafeAreaView>
  )
}
//prettier ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center',
  backgroundColor: MD2Colors.blue500},
  text: {fontSize: 20, color: MD2Colors.blue200}
})
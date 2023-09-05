import React from 'react'
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text, View} from 'react-native'
import {MD2Colors} from 'react-native-paper'

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

    <View style={[styles.box, styles.border]} />
    <View style={[styles.box, styles.border, {borderRadius: 20}]} />
    <View style={[styles.box, styles.border,
      {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]} />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create ({
  safeAreaView: {backgroundColor: MD2Colors.blue500, flex: 1, padding: 10},
  text: {marginBottom: 10, fontSize:20,
    color: MD2Colors.blue200 },
  box : {height: 100, backgroundColor:MD2Colors.lime500, marginBottom: 10},
  border: {borderWidth: 10, borderColor: MD2Colors.blue900}
})
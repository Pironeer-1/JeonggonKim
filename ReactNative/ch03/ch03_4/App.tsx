import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import {MD2Colors} from 'react-native-paper'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'

export default function() {
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex:1, backgroundColor: MD2Colors.lightBlue100}
})
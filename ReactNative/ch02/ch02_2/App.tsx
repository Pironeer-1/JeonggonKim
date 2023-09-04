import React from 'react'
import {SafeAreaView, Text} from 'react-native'

export default function App() {
  const isLoading = false
  const children = isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Text>Hello JSX world!</Text>
  )
  return <SafeAreaView>{children}</SafeAreaView>
}

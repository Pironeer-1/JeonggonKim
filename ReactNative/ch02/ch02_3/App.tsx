import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponent'
import Person from './src/screens/person'
import * as D from './src/data'

const Person = D.createRandomPerson()

export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView>
  )
}
import React from 'react'
import {SafeAreaView, Text, ScrollView} from 'react-native'
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponent'
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.createRandomPerson()

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ClassComponent />
        <ArrowComponent />
        <Person person={person} />
      </ScrollView>
    </SafeAreaView>
  )
}
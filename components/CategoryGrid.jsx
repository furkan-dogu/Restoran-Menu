import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{color}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
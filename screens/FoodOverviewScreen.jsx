import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodOverviewScreen({ route }) {
    const categoryId = route.params.categoryId
  return (
    <View>
      <Text>FoodOverviewScreen - {categoryId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
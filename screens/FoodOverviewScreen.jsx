import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { FOODS } from "../data/dummyData";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displayedFoods = FOODS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderFoodItem = (data) => {
    const foodItemProps = {
        id: data.item.id,
        title: data.item.title,
        imageUrl: data.item.imageUrl,
        affordability: data.item.affordability,
        complexity: data.item.complexity
    }
    return <FoodItem {...foodItemProps} />
  };

  return (
    <View>
      <FlatList
        data={displayedFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

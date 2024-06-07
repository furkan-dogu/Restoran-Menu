import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummyData";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (data) => {
    const handlePress = () => {
      navigation.navigate("FoodOverview", {
        categoryId: data.item.id
      });
    };

    return (
      <CategoryGrid
        title={data.item.title}
        color={data.item.color}
        pressFood={handlePress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
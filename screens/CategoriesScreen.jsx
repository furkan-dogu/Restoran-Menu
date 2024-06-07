import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummyData";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen() {
  const renderCategoryItem = (data) => {
    console.log(data.item);
    return <CategoryGrid title={data.item.title} color={data.item.color} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

const styles = StyleSheet.create({});

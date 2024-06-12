import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS } from "../data/dummyData";
import FoodIngredients from "../components/FoodIngredients";
import { Ionicons } from '@expo/vector-icons';

export default function FoodDetailScreen({ route, navigation }) {
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);

  const handlePress = () => {
    console.log("tıklandı")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={handlePress} style={({pressed}) => (pressed ? styles.pressed : null)}>
            <Ionicons name="star-half" size={24} color="white" />
          </Pressable>
        )
      }
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedFood.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50
  },

  image: {
    width: "100%",
    height: 300,
  },

  title: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    textTransform: "capitalize",
    color: "red"
  },

  listContainer: {
    width: "100%",
    paddingHorizontal: 10
  },

  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginVertical: 5
  },

  subTitle: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold"
  },

  pressed: {
    opacity: 0.5
  }
});

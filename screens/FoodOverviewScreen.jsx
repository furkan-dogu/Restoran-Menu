import { FlatList, View } from "react-native";
import { useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummyData";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedFoods = FOODS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  const renderFoodItem = (data) => {
    const foodItemProps = {
      id: data.item.id,
      title: data.item.title,
      imageUrl: data.item.imageUrl,
      affordability: data.item.affordability,
      complexity: data.item.complexity,
    };
    return <FoodItem {...foodItemProps} />;
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
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {

  const navigation = useNavigation()

  const handleFoodItem = () => {
    navigation.navigate("FoodDetail", {
      foodId: id
    })
  }

  return (
    <View style={styles.foodItem}>
      <Pressable style={({pressed}) => pressed ? styles.buttonPressed : null} onPress={handleFoodItem}>
        <View>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{complexity}</Text>
                <Text style={styles.detailItem}>{affordability}</Text>
            </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    foodItem: {
        margin: 15, 
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 10
    },

    image: {
        width: "100%",
        height: 200
    },

    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "capitalize",
        margin: 8
    },

    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        textTransform: "capitalize"
    },

    buttonPressed: {
        opacity: 0.5
    }
});

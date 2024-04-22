import React, { useEffect } from "react";
import { View, Text } from "@gluestack-ui/themed";
import { products } from "./constants/Constants";
import { FlatList, StyleSheet, StatusBar } from "react-native";
import ProductCard from "./tabs/dashboardComponents/ProductCard";

function CategoryItemViewer({ route, navigation }) {
  const { category } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: category,
    });
    console.log(category);
  }, [category]);

  const filteredProducts = products.filter(
    (item) => item.category === category
  );
  //   console.log(filteredProducts);

  const renderProductCard = ({ item }) => (
    <ProductCard
      name={item.itemName}
      image={item.image}
      sale={item.sale}
      shopkeeper={item.shopkeeper}
      id={item.id}
      price={item.price}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts} // Use the filtered data
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    justifyContent: "space-between",
  },
});

export default CategoryItemViewer;

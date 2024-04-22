import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView, Image } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
  VStack,
} from "@gluestack-ui/themed";

function CarouselCard(props: any) {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={props.item.image}
        resizeMode="stretch"
        style={styles.cardImage}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    backgroundColor: "lightgray",
    height: "95%",
    width: "100%",
    overflow: "hidden", // Make sure the image stays within the rounded border
    elevation: 5,
  },
  cardImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default CarouselCard;

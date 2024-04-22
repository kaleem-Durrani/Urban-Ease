import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "@gluestack-ui/themed";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.18;
const cardHeight = height * 0.11;

function CatogoriesCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryItemViewer", { category: props.name })
      }
      style={styles.cardStyle}
    >
      <View m={"$1"}>
        <Image
          source={props.image}
          resizeMode="contain"
          style={{ width: "100%", height: "100%", margin: 1 }}
        ></Image>
      </View>
    </TouchableOpacity>
  );
}

export default CatogoriesCard;

const styles = StyleSheet.create({
  cardStyle: {
    width: cardWidth,
    height: cardHeight,
    backgroundColor: "white",
    borderRadius: 50,
    marginHorizontal: 10,
    overflow: "hidden",
    elevation: 5,
  },
});

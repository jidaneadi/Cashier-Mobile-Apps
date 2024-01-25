import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 160,
    height: 160,
    borderRadius:160/2
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/logo.jpg")}
      />
    </View>
  );
}

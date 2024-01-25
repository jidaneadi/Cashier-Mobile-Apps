import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SearchBarProduct from "../../../components/SearchBarComponents/SearchBarProduct";
import CardProduct from "../../../components/ProductComponents/MainScreen/CardComponents/CardProduct";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    marginBottom: 50,
  },
});

export default function ProductScreen() {
  return (
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <SearchBarProduct />
      {/* Card Product */}
      <CardProduct />
    </View>
  );
}

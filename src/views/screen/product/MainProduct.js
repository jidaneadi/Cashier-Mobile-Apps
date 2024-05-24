import { View, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SearchBarProduct from "../../../components/SearchBarComponents/SearchBarProduct";
import CardProduct from "../../../components/ProductComponents/MainScreen/CardComponents/CardProduct";
import { API_BASE_URL } from "../../../api/apiConfig";
import { useFocusEffect } from "@react-navigation/native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    marginBottom: 50,
  },
});

export default function ProductScreen() {
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );
  
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/product`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  return (
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <SearchBarProduct />
      {/* Card Product */}
      <CardProduct data={products}/>
    </View>
  );
}

import { View, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CardProduct from "../../../components/ProductComponents/MainScreen/CardComponents/CardProduct";
import { API_BASE_URL } from "../../../api/apiConfig";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import SearchBarHome from "../../../components/SearchBarComponents/SearchBarHome";
import { IconButton } from "react-native-paper";
import GlobalStyle from "../../../styles/GlobalStyle";

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
  const navigation = useNavigation();
  const [inputSearch, setInputSearch] = useState("");

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  const handleSearch = (items) => {
    setInputSearch(items);
  };

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
      <View style={GlobalStyle.searchContainer}>
        {/* Search Bar */}
        <SearchBarHome onSearch={handleSearch} />
        <IconButton
          style={{
            marginRight: 0,
          }}
          icon="logout"
          onPress={() =>
            navigation.navigate("Main", {
              screen: "LoginScreen",
            })
          }
        />
      </View>
      {/* Card Product */}
      <CardProduct fetchProducts={fetchProducts}  data={products} searchData={inputSearch} />
    </View>
  );
}

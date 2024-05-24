import { View, StyleSheet, ScrollView, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScrollMenuSatuan from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollMenuSatuan";
import ScrollPaketCrispy from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollPaketCrispy";
import ScrollPaketPenyetan from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollPaketPenyetan";
import ScrollMiePedas from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollMiePedas";
import ScrollSausSpesial from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollSausSpesial";
import ScrollMenuSayur from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollMenuSayur";
import ScrollMinuman from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollMinuman";
import ScrollMinumanRasa from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollMinumanRasa";
import ScrollMenuLain from "../../../components/HomeComponents/MainScreen/ScrollComponents/ScrollMenuLain";
import SearchBarHome from "../../../components/SearchBarComponents/SearchBarHome";
import { API_BASE_URL } from "../../../api/apiConfig";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../dataservices/slice/cartSlice";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
import GlobalStyle from "../../../styles/GlobalStyle";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    marginBottom: 50,
  },

  icontButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 100,
    height: 50,
  },
});

export default function CashierScreen() {
  const [item, setItem] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      fetchitem();
    }, [])
  );

  const fetchitem = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/product`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  const handleSearch = (items) => {
    setInputSearch(items);
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
          icon="cart-outline"
          onPress={() =>
            navigation.navigate("Keranjang Product", {
              screen: "KeranjangProduct",
            })
          }
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Scroll Menu Satuan*/}
        <ScrollMenuSatuan
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Paket Crispy*/}
        <ScrollPaketCrispy
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Paket Penyetan*/}
        <ScrollPaketPenyetan
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Menu Mie Pedas*/}
        <ScrollMiePedas
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Saus Spesial*/}
        <ScrollSausSpesial
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Menu Sayur*/}
        <ScrollMenuSayur
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Minuman*/}
        <ScrollMinuman
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Minuman Varian Rasa*/}
        <ScrollMinumanRasa
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />

        {/* Scroll Menu Lain-Lain*/}
        <ScrollMenuLain
          produk={item}
          searchData={inputSearch}
          onAddToCart={handleAddToCart}
        />
      </ScrollView>
    </View>
  );
}

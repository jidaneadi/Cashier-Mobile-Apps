import { View, StyleSheet, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
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
  const dispatch = useDispatch();
  useEffect(() => {
    fetchitem();
  }, []);
 const fetchitem = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product`);
    const data = await response.json();
    setItem(data)
  } catch (error) {
    console.log(error)
  }
 }

 const handleAddToCart = (items) => {
  dispatch(addToCart(items));
 }
  return (
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <SearchBarHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Scroll Menu Satuan*/}
        <ScrollMenuSatuan data={item}/>

        {/* Scroll Paket Crispy*/}
        <ScrollPaketCrispy data={item} />

        {/* Scroll Paket Penyetan*/}
        <ScrollPaketPenyetan data={item} />

        {/* Scroll Menu Mie Pedas*/}
        <ScrollMiePedas data={item}/>

        {/* Scroll Saus Spesial*/}
        <ScrollSausSpesial data={item}/>

        {/* Scroll Menu Sayur*/}
        <ScrollMenuSayur data={item}/>

        {/* Scroll Minuman*/}
        <ScrollMinuman data={item}/>

        {/* Scroll Minuman Varian Rasa*/}
        <ScrollMinumanRasa data={item}/>

        {/* Scroll Menu Lain-Lain*/}
        <ScrollMenuLain produk={item} onAddToCart={handleAddToCart}/>
      </ScrollView>
    </View>
  );
}

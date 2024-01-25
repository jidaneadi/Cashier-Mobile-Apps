import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
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
  return (
    <View style={styles.mainContainer}>
      {/* Search Bar */}
      <SearchBarHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Scroll Menu Satuan*/}
        <ScrollMenuSatuan />

        {/* Scroll Paket Crispy*/}
        <ScrollPaketCrispy />

        {/* Scroll Paket Penyetan*/}
        <ScrollPaketPenyetan />

        {/* Scroll Menu Mie Pedas*/}
        <ScrollMiePedas />

        {/* Scroll Saus Spesial*/}
        <ScrollSausSpesial />

        {/* Scroll Menu Sayur*/}
        <ScrollMenuSayur />

        {/* Scroll Minuman*/}
        <ScrollMinuman />

        {/* Scroll Minuman Varian Rasa*/}
        <ScrollMinumanRasa />

        {/* Scroll Menu Lain-Lain*/}
        <ScrollMenuLain />
      </ScrollView>
    </View>
  );
}

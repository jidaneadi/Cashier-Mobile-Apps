import React from "react";
import { View } from "react-native";
import GlobalStyle from "../../../styles/GlobalStyle";
import SearchBarTransaksi from "../../../components/SearchBarComponents/SearchBarTransaksi";
import CardRiwayatTransaksi from "../../../components/TransaksiComponent/MainComponents/CardComponents/CardRiwayatTransaksi";

export default function TransaksiScreen({  }) {
  return (
    <View style={GlobalStyle.mainContainer}>
      {/* Search Bar */}
      <SearchBarTransaksi />
      <CardRiwayatTransaksi/>
    </View>
  );
}

import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { Ionicons } from "react-native-vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBarHome({ onSearch }) {
  return (
    // <View >
      <View style={[GlobalStyle.borderShadow, GlobalStyle.searchBar]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Cari produk" onChangeText={onSearch} />
      </View>
    // </View>
  );
}

import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import { TextInput, View } from "react-native";

export default function SearchBarProduct() {
  return (
    <View style={GlobalStyle.searchContainer}>
      <View style={[GlobalStyle.borderShadow, GlobalStyle.searchBar]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Cari produk" />
      </View>
    </View>
  );
}

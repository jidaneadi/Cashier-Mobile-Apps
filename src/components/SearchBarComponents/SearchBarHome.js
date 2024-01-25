import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { IconButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import { TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SearchBarHome() {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyle.searchContainer}>
      <View style={[GlobalStyle.borderShadow, GlobalStyle.searchBar]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Cari produk" />
      </View>
      <IconButton
        style={{
          marginRight: 0,
        }}
        icon="cart"
        onPress={() =>
          navigation.navigate("Keranjang Product", { screen: "KeranjangProduct" })
        }
      />
      {/* <IconButton style={{
        marginLeft:0,
      }} icon="logout" /> */}
    </View>
  );
}

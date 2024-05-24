import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { Button, Dialog, IconButton, Portal, Text } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import { TextInput, View } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

export default function SearchBarTransaksi() {
  return (
    <View style={GlobalStyle.searchContainer}>
      <View style={[GlobalStyle.borderShadow, GlobalStyle.searchBar]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Cari produk" />
      </View>
    </View>
  );
}

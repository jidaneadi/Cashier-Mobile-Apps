import React, { useState } from "react";
import { View } from "react-native";
import GlobalStyle from "../../../styles/GlobalStyle";
import CardRiwayatTransaksi from "../../../components/TransaksiComponent/MainComponents/CardComponents/CardRiwayatTransaksi";
import { IconButton } from "react-native-paper";
import SearchBarHome from "../../../components/SearchBarComponents/SearchBarHome";
import { useNavigation } from "@react-navigation/native";

export default function TransaksiScreen() {
  const [inputSearch, setInputSearch] = useState("");
  const navigation = useNavigation();

  const handleSearch = (items) => {
    setInputSearch(items);
  };

  return (
    <View style={GlobalStyle.mainContainer}>
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
      <CardRiwayatTransaksi searchData={inputSearch} />
    </View>
  );
}

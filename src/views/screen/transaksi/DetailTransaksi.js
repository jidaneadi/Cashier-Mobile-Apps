import React from "react";
import { ScrollView, View } from "react-native";
// import CardDetailTransaksi from "../../../components/DetailTransaksiComponents/CardDetailTransaksi..js";

export default function DetailTransaksi() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardDetailTransaksi />
      </ScrollView>
    </View>
  );
}

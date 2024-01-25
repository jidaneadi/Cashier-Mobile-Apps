import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native-paper";

export default function ButtonDetail({}) {
  const navigation = useNavigation();
  return (
    <Button
      buttonColor="#36A933"
      style={{ marginTop: 5 }}
      textColor="white"
      mode="elevated"
      onPress={() => navigation.navigate("Detail Transaksi", {screen: "DetailTransaksi"})}
    >
      Detail
    </Button>
  );
}

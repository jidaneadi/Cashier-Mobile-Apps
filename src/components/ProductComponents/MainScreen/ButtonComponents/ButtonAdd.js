import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

export default function ButtonAdd() {
  const navigation = useNavigation()
  return (
    <Button
      buttonColor="#36A933"
      style={{
        marginBottom: 10,
        marginRight: 10,
        width: 70,
      }}
      textColor="white"
      onPress={() => navigation.navigate("Tambah Product", {screen: "TambahProduct"})}
      >
      <Ionicons name="add" /> Add
    </Button>
  );
}

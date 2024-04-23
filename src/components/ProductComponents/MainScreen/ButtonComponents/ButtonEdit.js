import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

export default function ButtonEdit(props) {
  const navigation = useNavigation();
  console.log(props)
  return (
    <Button
      buttonColor="#F7D716"
      style={{ marginRight: 10 }}
      textColor="white"
      onPress={() => navigation.navigate("Edit Product", { productId })} // Menggunakan fungsi handleEditProduk
    >
      <Ionicons name="pencil" size={25} /> Edit
    </Button>
  );
}

import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import ButtonEdit from "../../../components/ProductComponents/EditProductScreen/ButtonComponents/ButtonEdit";

export default function EditProduct() {
  const [selectedJenis, setSelectedJenis] = useState("menu satuan");
  return (
    <View
      style={{
        // padding:4
        margin: 20,
      }}
    >
      <Text
        style={{
          paddingBottom: 10,
        }}
      >
        Nama Product
      </Text>
      <TextInput />
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        Harga
      </Text>
      <TextInput />
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        Jenis Produk
      </Text>
      <Picker
        style={{
          backgroundColor:"#E2DDEB",
          height: 50,
        }}
        selectedValue={selectedJenis}
        onValueChange={(itemValue, itemIndex) => setSelectedJenis(itemValue)}
      >
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Paket Crispy"
          value="paket crispy"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Paket Penyetan"
          value="paket penyetan"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Saus Spesial"
          value="saus spesial"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Mie Pedas"
          value="mie pedas"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Menu Satuan"
          value="menu satuan"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Menu Sayur"
          value="menu sayur"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Menu Varian Rasa"
          value="menu varian rasa"
        />
        <Picker.Item
          style={{ fontSize: 16 }}
          label="Menu Lain-Lain"
          value="menu lain-lain"
        />
        <Picker.Item style={{ fontSize: 16 }} label="Minuman" value="minuman" />
      </Picker>
      <ButtonEdit/>
    </View>
  );
}

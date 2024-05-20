import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ButtonBayar from "../../../components/HomeComponents/KeranjangScreen/ButtonComponents/ButtonBayar";
import { Ionicons } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Title } from "react-native-paper";
import GlobalStyle from "../../../styles/GlobalStyle";
import { selectCartItems } from "../../../dataservices/slice/cartSlice";
import CardKeranjang from "../../../components/HomeComponents/KeranjangScreen/CardComponents/CardKeranjang";

export default function KeranjangProduct() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 15,
      gap: 10,
    },
  });

  const [selectedLayanan, setSelectedLayanan] = React.useState("ditempat");
  const [selectedBayar, setSelectedBayar] = React.useState("cash");
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems)

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item, i) => (
          <CardKeranjang
          key={i}
          productId={item.id} //Mengambil data id produk yang di klik
          productName={item.nama_produk}//Mengambil data nama produk yang di klik
          productHarga={item.harga}//Mengambil data harga produk yang di klik
          jml={item.jumlah}
          />
        ))}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Total harga</Text>
          <Text>
            Rp.
            {cartItems.reduce(
              (total, item) => total + item.harga * item.jumlah,
              0
            )}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ paddingTop: 15 }}>Layanan</Text>
          <Picker
            style={{ width: 180, height: 50 }}
            selectedValue={selectedLayanan}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLayanan(itemValue)
            }
          >
            <Picker.Item label="Makan di tempat" value="ditempat" />
            <Picker.Item label="Takeaway" value="takeway" />
          </Picker>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ paddingTop: 15 }}>Pembayaran</Text>
          <Picker
            style={{ width: 180, height: 50 }}
            selectedValue={selectedBayar}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBayar(itemValue)
            }
          >
            <Picker.Item label="Uang Cash" value="cash" />
            <Picker.Item label="Scan QRIS" value="qris" />
          </Picker>
        </View>
        <ButtonBayar />
      </ScrollView>
    </View>
  );
}

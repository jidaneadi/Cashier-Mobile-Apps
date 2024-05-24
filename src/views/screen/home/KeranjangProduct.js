import React, { useState, useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "react-native-vector-icons";
import ButtonBayar from "../../../components/HomeComponents/KeranjangScreen/ButtonComponents/ButtonBayar";
import GlobalStyle from "../../../styles/GlobalStyle";
import {
  emptyCart,
  selectCartItems,
} from "../../../dataservices/slice/cartSlice";
import CardKeranjang from "../../../components/HomeComponents/KeranjangScreen/CardComponents/CardKeranjang";
import { API_BASE_URL } from "../../../api/apiConfig";

export default function KeranjangProduct() {
  const [id_karyawan, setIdKaryawan] = useState("7"); // Atur sesuai kebutuhan
  const [nama_pelanggan, setNamaPelanggan] = useState(""); // Atur sesuai kebutuhan
  const [selectedLayanan, setSelectedLayanan] = useState("makan di tempat");
  const [selectedBayar, setSelectedBayar] = useState("cash");
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const totalHarga = cartItems.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  const handleTransaksi = async () => {
    const tot_harga = totalHarga.toString(); // Convert ke string
    const layanan = selectedLayanan;
    const pembayaran = selectedBayar;

    // Data khusus untuk key keranjang
    const keranjang = cartItems.map((item) => ({
      id_barang: item.id.toString(), // Convert ke string
      jumlah: item.jumlah.toString(), // Convert ke string
    }));

    try {
      const response = await fetch(`${API_BASE_URL}/transaksi/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keranjang,
          id_karyawan,
          nama_pelanggan,
          tot_harga,
          layanan,
          pembayaran,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        Alert.alert("Sukses","Transaksi Berhasil!!!!");
        dispatch(emptyCart());
        setNamaPelanggan("");
      } else {
        // Display error message
        Alert.alert('Transaksi Gagal', data.message);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred while logging in. Please try again.")
    }
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 15,
      gap: 10,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item, i) => (
          <CardKeranjang
            key={i}
            productId={item.id} // Mengambil data id produk yang di klik
            productName={item.nama_produk} // Mengambil data nama produk yang di klik
            productHarga={item.harga} // Mengambil data harga produk yang di klik
            jml={item.jumlah} // Mengambil jumlah produk yang diinputkan
          />
        ))}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Nama Pelanggan</Text>
          <TextInput
          style={{
            height:30,
            width:165
          }}
            value={nama_pelanggan}
            onChangeText={(nama_pelanggan) => setNamaPelanggan(nama_pelanggan)}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Total harga</Text>
          <Text>Rp. {totalHarga}</Text>
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
            <Picker.Item label="Makan di tempat" value="makan di tempat" />
            <Picker.Item label="Takeaway" value="takeaway" />
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
        <Button
          buttonColor="#A25ABF"
          textColor="white"
          onPress={handleTransaksi}
        >
          Bayar
        </Button>
      </ScrollView>
    </View>
  );
}

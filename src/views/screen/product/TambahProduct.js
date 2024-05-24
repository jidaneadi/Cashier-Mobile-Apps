import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { API_BASE_URL } from "../../../api/apiConfig";

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  textFormStyle: {
    paddingVertical: 10,
  },
  pickerFormStyle: {
    backgroundColor: "#E2DDEB",
    height: 50,
  },
  buttonFormStyle: {
    paddingVertical: 10,
  },
});

export default function TambahProduct() {
  const [nama_produk, setNamaProduk] = useState("");
  const [jns_produk, setJenisProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleTambahProduk = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama_produk, jns_produk, harga, keterangan }),
      });
      const data = await response.json();

      if (response.ok) {
        setNamaProduk('');
        setJenisProduk('');
        setHarga('');
        setKeterangan('');
        Alert.alert("Sukses", "Sukses update data produk!");
      } else {
        Alert.alert("Error", data.msg);
      }
    } catch (error) {
      Alert.alert("Error", "Terdapat kesalahan saat input data");
    }
  };
  // Data array yang berisi label dan nilai untuk setiap opsi picker
  const options = [
    { label: "Pilih Jenis Produk", value: "" },
    { label: "Paket Crispy", value: "paket crispy" },
    { label: "Paket Penyetan", value: "paket penyetan" },
    { label: "Saus Spesial", value: "saus spesial" },
    { label: "Mie Pedas", value: "mie pedas" },
    { label: "Menu Satuan", value: "menu satuan" },
    { label: "Menu Sayur", value: "menu sayur" },
    { label: "Minuman Varian Rasa", value: "minuman varian rasa" },
    { label: "Menu Lain-Lain", value: "menu lain-lain" },
    { label: "Minuman", value: "minuman" },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textFormStyle}>Nama Product</Text>
      <TextInput
        label="Nama produk"
        value={nama_produk}
        onChangeText={(nama_produk) => setNamaProduk(nama_produk)}
      />
      <Text style={styles.textFormStyle}>Harga</Text>
      <TextInput
        label="Harga produk"
        value={harga}
        onChangeText={(harga) => setHarga(harga)}
      />
      <Text style={styles.textFormStyle}>Jenis Produk</Text>
      <Picker
        style={styles.pickerFormStyle}
        selectedValue={jns_produk}
        onValueChange={(itemValue, itemIndex) => {
          setJenisProduk(itemValue); // Set jenis_produk saat nilai berubah
        }}
      >
        {options.map((option, index) => (
          <Picker.Item
            key={index}
            label={option.label}
            value={option.value} // Atur nilai dari option.value
            style={{ fontSize: 16 }}
          />
        ))}
      </Picker>
      <Text style={styles.textFormStyle}>Keterangan</Text>
      <TextInput
        label="Keterangan produk"
        value={keterangan}
        onChangeText={(keterangan) => setKeterangan(keterangan)}
      />
      {/* <ButtonTambah  /> */}
      <Button
        buttonColor="#A25ABF"
        textColor="white"
        style={{ marginVertical: 30 }}
        onPress={handleTambahProduk}
      >
        Tambah
      </Button>
    </View>
  );
}

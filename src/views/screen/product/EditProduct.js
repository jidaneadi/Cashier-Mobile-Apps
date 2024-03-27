import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { API_BASE_URL } from "../../../api/apiConfig";

export default function EditProduct({ route }) {
  const { productId } = route.params;
  const [nama_produk, setNamaProduk] = useState("");
  const [jns_produk, setJenisProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [keterangan, setKeterangan] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // Atur nilai state berdasarkan respons dari API
        setNamaProduk(data.nama_produk);
        setJenisProduk(data.jenis_produk);
        setHarga(data.harga);
        setKeterangan(data.keterangan);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [productId]);

  const handleSubmit = async () => {
    try {
      // Kirim data produk yang sudah diubah ke API
      const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama_produk, jns_produk, harga, keterangan }),
      });
      const data = await response.json();

      if (response.ok) {
        setNamaProduk("");
        setJenisProduk("");
        setHarga("");
        setKeterangan("");
        Alert.alert("Sukses", data.msg);
      } else {
        console.log(response);
        Alert.alert("Error", data.msg);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      Alert.alert("Error", "Terdapat kesalahan saat input data");
    }
  };

  // Data array yang berisi label dan nilai untuk setiap opsi picker
  const options = [
    { label: "Pilih jenis produk", value: "" },
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
    <View
      style={{
        margin: 20,
      }}
    >
      <Text
        style={{
          paddingBottom: 10,
        }}
      >
        Nama Produk
      </Text>
      <TextInput
        value={nama_produk}
        onChangeText={setNamaProduk}
        placeholder="Nama Produk"
      />
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        Harga
      </Text>
      <TextInput
        value={harga}
        onChangeText={setHarga}
        placeholder="Harga"
        keyboardType="numeric"
      />
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        Jenis Produk
      </Text>
      <Picker
        style={{
          backgroundColor: "#E2DDEB",
          height: 50,
        }}
        selectedValue={jns_produk}
        onValueChange={(itemValue, itemIndex) => setJenisProduk(itemValue)}
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
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        Keterangan
      </Text>
      <TextInput
        value={keterangan}
        onChangeText={setKeterangan}
        placeholder="Keterangan Produk"
      />
      <Button
        mode="contained"
        buttonColor="#A25ABF"
        textColor="white"
        style={{ marginVertical: 30 }}
        onPress={handleSubmit}
      >
        Simpan
      </Button>
    </View>
  );
}

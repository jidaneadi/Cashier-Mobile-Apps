import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text, Alert } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import ButtonAdd from "../ButtonComponents/ButtonAdd";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { API_BASE_URL } from "../../../../api/apiConfig";

export default function CardProduct() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/product`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEditProduk = (productId) => {
    navigation.navigate("Edit Product", { productId });
  };

  const handleDeleteProduk = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      // Jika penghapusan berhasil, panggil kembali API untuk mendapatkan daftar produk terbaru
      if (response.ok) {
        Alert.alert("Sukses", data.msg);
        fetchProducts();
      } else {
        Alert.alert("Error", data.msg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Terdapat kesalahan saat input data");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Button Add */}
      <ButtonAdd />
      {/* Card */}
      {products.map((product, index) => (
        <Card key={index} style={GlobalStyle.cardProductContainer}>
          <Card.Content style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 50 }}>
              {/* Ganti source gambar dengan gambar produk */}
              <Image
                style={{ width: 75, height: 100 }}
                source={require("../../../../assets/logo.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Title
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {product.nama_produk}
              </Title>
              <Title
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                Harga: {product.harga}
              </Title>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {/* Button Edit */}
                <Button
                  buttonColor="#F7D716"
                  style={{ marginRight: 10 }}
                  textColor="white"
                  onPress={() => handleEditProduk(product.id)} // Menggunakan fungsi handleEditProduk
                >
                  <Ionicons name="pencil" size={25} /> Edit
                </Button>
                {/* Button Delete */}
                <Button
                  buttonColor="#E40017"
                  textColor="white"
                  onPress={() => handleDeleteProduk(product.id)}
                >
                  <Ionicons name="trash" size={18} /> Hapus
                </Button>
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

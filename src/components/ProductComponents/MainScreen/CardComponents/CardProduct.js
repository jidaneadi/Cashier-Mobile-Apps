import React from "react";
import { ScrollView, View, Image, Alert } from "react-native";
import { Button, Card, Text, Title } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import ButtonAdd from "../ButtonComponents/ButtonAdd";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { API_BASE_URL } from "../../../../api/apiConfig";

export default function CardProduct({fetchProducts, data, searchData }) {
  const imageProduk = require("../../../../assets/logo.jpg");
  const navigation = useNavigation();
  console.log("Data = ", data);

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

  // Filter produk berdasarkan data pencarian
  const filteredProduk = data.filter((product) =>
    product.nama_produk.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Button Add */}
      <ButtonAdd />
      {/* Card */}
      {filteredProduk.map((product, index) => (
        <Card key={index} style={GlobalStyle.cardProductContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Card.Cover
              style={{
                width: 140,
                height: 140,
                borderRadius: 0,
              }}
              source={imageProduk}
            ></Card.Cover>
            {/* </View> */}
            <View style={{ justifyContent: "center" }}>
              <Card.Content>
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
              </Card.Content>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

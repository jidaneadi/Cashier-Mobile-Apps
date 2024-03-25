import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import { Card, Title } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import ButtonAdd from "../ButtonComponents/ButtonAdd";
import ButtonEdit from "../ButtonComponents/ButtonEdit";
import ButtonDelete from "../ButtonComponents/ButtonDelete";
import { API_BASE_URL } from "../../../../api/apiConfig";

export default function CardProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/product`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
                <ButtonEdit />
                {/* Button Delete */}
                <ButtonDelete />
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

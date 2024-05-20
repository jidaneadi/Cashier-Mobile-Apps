import React, { useState } from "react";
import GlobalStyle from "../../../../styles/GlobalStyle";
import { View, ScrollView, Text } from "react-native";
import { Card } from "react-native-paper";
import { useDispatch } from "react-redux";
import DialogInputJumlah from "../DialogComponents/DialogInputJumlah";

export default function ScrollPaketCrispy({produk, onAddToCart}) {
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const showDialog = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  const addToCart = () => {
    if (selectedProduct) { // Pengecekan data apakah kosong atau tidak
      onAddToCart(selectedProduct);
      setVisible(false);
    }
  };
  return (
    <View>
      <Text style={GlobalStyle.textStyle}>Paket Crispy</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {produk.filter((product) => product.jns_produk === "paket crispy").map((product, i) => (
          <Card
            key={i}
            onPress={() => showDialog(product)}
            style={GlobalStyle.cardContainer}
          >
            <Card.Cover style={GlobalStyle.cardCover} />
            <Card.Content style={GlobalStyle.cardContent}>
              <Text style={GlobalStyle.textCardContent}>
                {product.nama_produk}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                {product.harga}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      {selectedProduct && ( // Melakukan pemilihan data produk
        <DialogInputJumlah
          visible={visible}
          onClose={() => setVisible(false)}
          onAdd={addToCart}
          productId={selectedProduct.id} //Mengambil data id produk yang di klik
          productName={selectedProduct.nama_produk}//Mengambil data nama produk yang di klik
          productHarga={selectedProduct.harga}//Mengambil data harga produk yang di klik
        />
      )}
    </View>
  );
}

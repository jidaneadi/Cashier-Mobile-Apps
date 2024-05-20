import React from "react";
import { View, Image } from "react-native";
import { Button, Card, Text, Title } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import GlobalStyle from "../../../../styles/GlobalStyle";
import { useDispatch, useSelector } from "react-redux";

export default function CardKeranjang({key, productId, productName, productHarga, jml}) {
  const dispatch = useDispatch();
  console.log(key)
  return (
    <View>
      <Card key={key} style={GlobalStyle.cardKeranjangProduk}>
        <View>
          <Card.Content>
            <Title
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              {productName}
              {/* {item.nama_produk} */}
            </Title>
            <Title
              style={{
                fontSize: 10,
                fontWeight: "bold",
                marginBottom: 0,
              }}
            >
              {productHarga}
              {/* Harga: Rp. {item.harga} */}
            </Title>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {/* Tombol Minus */}
                <Button
                  buttonColor="#A25ABF"
                  style={{
                    marginBottom: 10,
                    marginRight: 10,
                    width: 60,
                  }}
                >
                  <Ionicons name="remove" color="white" size={20} />
                </Button>
                <Text variant="bodyMedium">{jml}</Text>
                {/* Tombol Plus */}
                <Button
                  buttonColor="#A25ABF"
                  style={{
                    marginBottom: 10,
                    marginRight: 10,
                    marginStart: 8,
                    width: 60,
                  }}
                >
                  <Ionicons name="add" color="white" size={20} />
                </Button>
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginStart: 120,
                }}
              >
                <Text>Rp. {productHarga * jml}</Text>
              </View>
            </View>
          </Card.Content>
        </View>
      </Card>
    </View>
  );
}

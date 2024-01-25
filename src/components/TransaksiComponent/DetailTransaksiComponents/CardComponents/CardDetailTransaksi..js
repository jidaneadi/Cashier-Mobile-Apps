import React from "react";
import { Image, View } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";
import { Card, Divider, Text } from "react-native-paper";

export default function CardDetailTransaksi() {
  return (
    <View  style={{
      padding:15
    }}>
      {Array.from(Array(5)).map((_, i) => (
        <Card key={i} style={GlobalStyle.cardDetailTransaksiContainer}>
          <Card.Content style={{ flexDirection: "column" }}>
            <View style={{
              margin:5,
              flexDirection:"row"
            }}>
              <View >
              <Image
                  style={{ width: 50, height: 60 }}
                  source={require("../../assets/logo.jpg")}
                />
              </View>
              <View style={{
                marginLeft:10
              }}>
                <Text style={{
                  fontSize:20,
                  fontWeight:"bold"
                }}>Nama Produk</Text>
                <Text style={{
                  marginTop:3,
                  fontSize:12
                }}>1 x 20.000</Text>
              </View>
            </View>
            <View style={{
              padding:2
            }}>
              <Divider bold/>
            </View>
            <View style={{
              margin:5,
              flexDirection:"row",
              justifyContent:"space-between",
            }}>
              <Text style={{
                fontWeight:"bold"
              }}>Total Harga:</Text>
              <Text>Rp. 20.000</Text>
            </View>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
}

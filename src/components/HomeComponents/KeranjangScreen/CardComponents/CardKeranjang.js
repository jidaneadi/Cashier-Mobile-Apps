import React from "react";
import { View, Image } from "react-native";
import { Card, Text, Title } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import ButtonPlus from "../ButtonComponents/ButtonPlus";
import ButtonMin from "../ButtonComponents/ButtonMin";

export default function CardKeranjang() {
  return (
    <View>
      {/* Card */}
      {Array.from(Array(5)).map((_,i) => (
        <Card key={i} style={GlobalStyle.cardProductContainer}>
          <Card.Content style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 50 }}>
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
                Nama Makanan
              </Title>
              <Title
                style={{
                  fontSize:10,
                  fontWeight:"bold",
                  marginBottom:0,
                  color:"#B4A5A5"
                }} >Rp. 30.000</Title>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {/* Button Tambah */}
                <ButtonPlus />

                <Text style={{ padding: 10 }}>2</Text>

                {/* Button Minus */}
                <ButtonMin />
              </View>
            </View>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
}

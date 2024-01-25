import React from "react";
import { ScrollView, View, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import ButtonAdd from "../ButtonComponents/ButtonAdd";
import ButtonEdit from "../ButtonComponents/ButtonEdit";
import ButtonDelete from "../ButtonComponents/ButtonDelete";

export default function CardProduct() {
  return (
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Button Add */}
        <ButtonAdd/>

        {/* Card */}
        {Array.from(Array(15)).map((_, i) => (
          <Card key={i} style={GlobalStyle.cardProductContainer}>
            <Card.Content style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 50 }}>
                <Image
                  style={{ width: 75, height: 100 }}
                  source={require("../../../../assets/logo.jpg")}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Title style={{
                  fontSize:16,
                  fontWeight:"bold",
                  marginTop:0,
                  marginBottom:0,
                }}>Nama Makanan</Title>
                <Title
                style={{
                  fontSize:10,
                  fontWeight:"bold",
                  marginBottom:0,
                }}>Stok : 20</Title>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  {/* Button Edit */}
                  <ButtonEdit
                   onPress={() => navigation.navigate("Main", { screen: "CashierScreen" })}
                  />

                  {/* Button Delete */}
                  <ButtonDelete
                 
                  />
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
  );
}

import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Card, IconButton } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import ButtonDetail from "../ButtonComponents/ButtonDetail";

export default function CardRiwayatTransaksi({ }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Card */}
      {Array.from(Array(15)).map((_, i) => (
        <Card key={i} style={GlobalStyle.cardTransaksiContainer}>
          <Card.Content style={{ flexDirection: "column" }}>
            <View
              style={{
                margin: 0,
                flexDirection: "row",
              }}
            >
              <IconButton
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                  marginEnd: 0,
                }}
                size={20}
                icon="calendar"
              />
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                  marginEnd: 2,
                }}
              >
                Senin, 21 Desember 2023
              </Text>
              <IconButton
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                  marginEnd: 0,
                }}
                size={20}
                icon="alarm"
              />
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {" "}
                12.00
              </Text>
            </View>
            {/* Baris 2 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  height: 35,
                  marginHorizontal: 7,
                  padding: 10,
                  gap: 10,
                  borderColor: "gray",
                  borderRadius: 10,
                  shadowColor: "gray",
                  shadowOffset: {
                    width: 2,
                    height: 1,
                  },
                  shadowOpacity: 5,
                  shadowRadius: 2,
                  elevation: 5,
                  borderTopWidth: 0,
                  borderLeftWidth: 0.2,
                  backgroundColor: "#C8A8D6",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  1440900299029
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Rp. 200.000
                </Text>
              </View>
            </View>
          {/* Baris 3 */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                margin: 5,
              }}
            >
            {/* Button Detail Transaksi */}
              <ButtonDetail/>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

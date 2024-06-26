import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Card, IconButton } from "react-native-paper";
import GlobalStyle from "../../../../styles/GlobalStyle";
import { API_BASE_URL } from "../../../../api/apiConfig";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function CardRiwayatTransaksi({ searchData }) {
  const [dataTransaksi, setDataTransaksi] = useState([]);
  const navigation = useNavigation();
  const tanggalLogin = new Date().toISOString().slice(0, 10);

  useFocusEffect(
    useCallback(() => {
      fetchTransaksi();
    }, [])
  );
  const fetchTransaksi = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/transaksi`);
      const data = await response.json();
      const newData = data.filter(
        (item) => item.updatedAt.slice(0, 10) === tanggalLogin
      );
      console.log(data);
      console.log(tanggalLogin);
      console.log(newData);
      setDataTransaksi(newData);
    } catch (error) {
      console.error("Error fetching transaksi", error);
    }
  };

  // Fungsi untuk memformat harga menjadi format mata uang Rupiah
  const formatToRupiah = (harga) => {
    return harga.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleDetailTransaksi = (idTransaksi) => {
    navigation.navigate("Detail Transaksi", { idTransaksi });
  };

  // Search Data Transaksi
  const filteredProduk = dataTransaksi.filter((transaksi) =>
    transaksi.nama_pelanggan.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Card */}
      {filteredProduk.map((transaksi, index) => (
        <Card key={index} style={GlobalStyle.cardTransaksiContainer}>
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
                {transaksi.updatedAt.slice(0, 10)}
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
                {transaksi.updatedAt.slice(10, 19)}
              </Text>
              <IconButton
                style={{
                  marginTop: 0,
                  paddingTop: 0,
                  marginEnd: 0,
                }}
                size={20}
                icon="food"
              />
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {transaksi.layanan}
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
                  {transaksi.nama_pelanggan}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {transaksi.pembayaran}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Rp. {formatToRupiah(transaksi.tot_harga)}
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
              <Button
                buttonColor="#36A933"
                style={{ marginTop: 5 }}
                textColor="white"
                mode="elevated"
                onPress={() => handleDetailTransaksi(transaksi.id)}
              >
                Detail
              </Button>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

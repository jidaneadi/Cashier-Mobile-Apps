import React, { useEffect, useState } from "react";
import { ScrollView, Image, View } from "react-native";
import CardDetailTransaksi from "../../../components/TransaksiComponent/DetailTransaksiComponents/CardComponents/CardDetailTransaksi.";
import { Text, Card, Divider } from "react-native-paper";
import { API_BASE_URL } from "../../../api/apiConfig";
import GlobalStyle from "../../../styles/GlobalStyle";

export default function DetailTransaksi({ route }) {
  const { idTransaksi } = route.params;
  const [dataKeranjang, setDataKeranjang] = useState([]);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/keranjang/${idTransaksi}`);
      const data = await response.json();
      console.log(data);
      setDataKeranjang(data);
    } catch (error) {
      console.error("Error fetching transaksi", error);
    }
  };

  const formatToRupiah = (harga) => {
    return harga.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 15,
          }}
        >
          {dataKeranjang.map((keranjang, index) => (
            <Card key={index} style={GlobalStyle.cardDetailTransaksiContainer}>
              <Card.Content style={{ flexDirection: "column" }}>
                <View
                  style={{
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      style={{ width: 50, height: 60 }}
                      source={require("../../../assets/logo.jpg")}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {keranjang.nama_produk}
                    </Text>
                    <Text
                      style={{
                        marginTop: 3,
                        fontSize: 12,
                      }}
                    >
                      {keranjang.jumlah} x {keranjang.harga}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    padding: 2,
                  }}
                >
                  <Divider bold />
                </View>
                <View
                  style={{
                    margin: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Total Harga:
                  </Text>
                  <Text>Rp. {keranjang.jumlah * keranjang.harga}</Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

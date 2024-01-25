import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ButtonBayar from "../../../components/HomeComponents/KeranjangScreen/ButtonComponents/ButtonBayar";
import CardKeranjang from "../../../components/HomeComponents/KeranjangScreen/CardComponents/CardKeranjang";
export default function KeranjangProduct() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 15,
      gap: 10,
    },
  });

  const [selectedLayanan, setSelectedLayanan] = useState("ditempat");
  const [selectedBayar, setSelectedBayar] = useState("cash");

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardKeranjang />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Total harga</Text>
          <Text>Rp. 200.000</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "flex-end",
          }}
        >
          <Text
            style={{
              paddingTop: 15,
            }}
          >
            Layanan
          </Text>
          <Picker
            style={{
              width: 180,
              height: 50,
              // backgroundColor:"white"
            }}
            selectedValue={selectedLayanan}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLayanan(itemValue)
            }
          >
            <Picker.Item style={{fontSize:12}} label="Makan di tempat" value="ditempat" />
            <Picker.Item style={{fontSize:12}} label="Takeaway" value="takeway" />
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              paddingTop: 15,
            }}
          >
            Pembayaran
          </Text>
          <Picker
            style={{
              width: 180,
              height: 50,
            }}
            selectedValue={selectedBayar}
            // mode={"dialog"}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBayar(itemValue)
            }
          >
            <Picker.Item style={{fontSize:12}} label="Uang Cash" value="cash" />
            <Picker.Item style={{fontSize:12}} label="Scan QRIS" value="qris" />
          </Picker>
        </View>
        <ButtonBayar/>
      </ScrollView>
    </View>
  );
}

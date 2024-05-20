import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Dialog,
  Portal,
  TextInput,
  Button
} from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../dataservices/slice/cartSlice";

export default function DialogInputJumlah({
  visible,
  onClose,
  onAdd,
  productId,
  productName,
  productHarga
}) {
  const [jumlah, setJumlah] = useState(0);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setJumlah((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setJumlah((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    const newItem = {
      id: productId, //Mengirim data id produk
      nama_produk: productName,//Mengirim data nama produk
      jumlah: jumlah, //Mengirim data jumlah produk
      harga: productHarga, // Anda mungkin ingin menambahkan harga
    };
    dispatch(addToCart(newItem));
    setJumlah(0);
    console.log(addToCart(newItem));
    console.log(productId);
    onClose(); // Tutup dialog setelah menambahkan ke keranjang
  };
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onClose}>
        <Dialog.Title>Jumlah {productId}</Dialog.Title>
        <Dialog.Content>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onPress={handleDecrease}
              style={{ marginBottom: 10, marginRight: 10, width: 60 }}
              buttonColor="#A25ABF"
            >
              <Ionicons name="remove" size={20} color="white" />
            </Button>
            <TextInput
              style={{ marginHorizontal: 10, textAlign: "center" }}
              value={jumlah.toString()} // Nilai jumlah ditampilkan di sini
              keyboardType="numeric"
              defaultValue={jumlah.toString()} // Default value
              onChangeText={(text) => setJumlah(text)}
            />
            <Button
              onPress={handleIncrease}
              style={{ marginBottom: 10, marginRight: 10, width: 60 }}
              buttonColor="#A25ABF"
            >
              <Ionicons name="add" size={20} color="white" />
            </Button>
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleAddToCart}>Tambah</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

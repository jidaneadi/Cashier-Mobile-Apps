import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import { Button, Dialog, IconButton, Portal, Text } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import { TextInput, View } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

export default function SearchBarTransaksi() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [date, setDate] = React.useState(new Date());
  const [showPicker, setShowPicker] = React.useState(false);

  const toggleDatePicker =()=>{
    setShowPicker(!showPicker);
  }
  return (
    <View style={GlobalStyle.searchContainer}>
      <View style={[GlobalStyle.borderShadow, GlobalStyle.searchBar]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Cari produk" />
      </View>
      <IconButton
        style={{
          marginRight: 0,
        }}
        icon="calendar"
        onPress={showDialog}
      />

      {/* Dialog */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title
            style={{
              textAlign: "center",
            }}
          >
            Periode Transaksi
          </Dialog.Title>
          <Dialog.Content>
            <Text>Dari Tanggal</Text>
            <TextInput />
            <Text>Sampai Tanggal</Text>
            <TextInput />
            {/* {showPicker &&(
              <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              />
            )} */}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Tambah</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

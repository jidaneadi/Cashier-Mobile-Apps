import React from "react";
import GlobalStyle from "../../../../styles/GlobalStyle";
import { View, ScrollView, Text } from "react-native";
import { Button, Card, Dialog, Portal } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../../../dataservices/slice/counterslice";

export default function ScrollMenuLain(props) {
  const [visible, setVisible] = React.useState(false);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const data = props.data;
  return (
    <View>
      <Text style={GlobalStyle.textStyle}>Menu Lain-Lain</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data
          .filter((menus) => menus.jns_produk === "menu lain-lain")
          .map((menus, i) => (
            <Card
              key={i}
              onPress={showDialog}
              style={GlobalStyle.cardContainer}
            >
              <Card.Cover style={GlobalStyle.cardCover} />
              <Card.Content style={GlobalStyle.cardContent}>
                <Text style={GlobalStyle.textCardContent}>
                  {menus.nama_produk}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>
                  {menus.harga}
                </Text>
              </Card.Content>
            </Card>
          ))}

        {/* Dialog */}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title
              style={{
                textAlign: "center",
              }}
            >
              Jumlah
            </Dialog.Title>
            <Dialog.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 10,
                }}
              >
                <Button
                  buttonColor="#A25ABF"
                  style={{
                    marginBottom: 10,
                    marginRight: 10,
                    width: 60,
                  }}
                  textColor="white"
                  onPress={() => dispatch(decrement())}
                >
                  <Ionicons name="remove" />
                </Button>
                <Text variant="bodyMedium">{count}</Text>
                <Button
                  buttonColor="#A25ABF"
                  style={{
                    marginBottom: 10,
                    marginRight: 10,
                    width: 60,
                  }}
                  textColor="white"
                  onPress={() => dispatch(increment())}
                >
                  <Ionicons name="add" />
                </Button>
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Tambah</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </View>
  );
}

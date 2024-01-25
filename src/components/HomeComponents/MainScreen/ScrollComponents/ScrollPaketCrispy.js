import React from 'react'
import GlobalStyle from "../../../../styles/GlobalStyle";
import { View, ScrollView, Text } from "react-native";
import { Button, Card, Dialog, Portal } from "react-native-paper";
import ButtonPlus from '../../KeranjangScreen/ButtonComponents/ButtonPlus';
import ButtonMin from '../../KeranjangScreen/ButtonComponents/ButtonMin';

export default function ScrollPaketCrispy() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <View>
      <Text style={GlobalStyle.textStyle}>Paket Crispy</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(5)).map((_, i) => (
          <Card key={i} onPress={showDialog} style={GlobalStyle.cardContainer}>
            <Card.Cover
              style={GlobalStyle.cardCover}
            />
            <Card.Content
              style={GlobalStyle.cardContent}
            >
              <Text
                style={GlobalStyle.textCardContent}
              >
                Makanan
              </Text>
              <Text>Rp. 15.000</Text>
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
                  marginTop:10,
                }}
              >
                <ButtonPlus />
                <Text variant="bodyMedium">1</Text>
                <ButtonMin />
              </View>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Tambah</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </View>
  )
}

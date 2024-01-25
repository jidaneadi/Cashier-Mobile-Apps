import React from 'react'
import { View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

export default function EditProduct() {
  return (
    <View style={{
      // padding:4
      margin:20
    }}>
      <Text>Nama Product</Text>
      <TextInput/>
      <Text>Harga</Text>
      <TextInput/>
    </View>
  )
}

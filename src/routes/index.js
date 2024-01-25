import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsNav from './tabnav'
import LoginScreen from '../views/screen/auth/LoginScreen'
import DetailTransaksi from '../views/screen/transaksi/DetailTransaksi'
import KeranjangProduct from '../views/screen/home/KeranjangProduct'
import EditProduct from '../views/screen/product/EditProduct'

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={TabsNav} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Detail Transaksi" component={DetailTransaksi} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
            <Stack.Screen name="Keranjang Product" component={KeranjangProduct} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
            <Stack.Screen name="Edit Product" component={EditProduct} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
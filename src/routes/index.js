import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabsNav from './tabnav'
import DetailTransaksi from '../views/screen/transaksi/DetailTransaksi'
import KeranjangProduct from '../views/screen/home/KeranjangProduct'
import EditProduct from '../views/screen/product/EditProduct'
import TambahProduct from '../views/screen/product/TambahProduct'
import Login from '../views/screen/auth/LoginScreen'

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Home" component={TabsNav} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Detail Transaksi" component={DetailTransaksi} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
            <Stack.Screen name="Keranjang Product" component={KeranjangProduct} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
            <Stack.Screen name="Edit Product" component={EditProduct} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
            <Stack.Screen name="Tambah Product" component={TambahProduct} options={{headerStyle:{
              backgroundColor:"#C8A8D6"
            }}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
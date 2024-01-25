import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import CashierScreen from "../views/screen/home/MainHome";
import TransaksiScreen from "../views/screen/transaksi/MainTransaksi";
import ProductScreen from "../views/screen/product/MainProduct";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyle from "../styles/GlobalStyle";

const Tabs = createBottomTabNavigator();
export default function TabsNav() {
  return (
    <SafeAreaView style={GlobalStyle.droidSafeArea}>
    <Tabs.Navigator
      screenOptions={{
        // tabBarShowLabel:false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor:"#000000",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 25,
          right: 25,
          borderRadius:10,
          padding: 10,
          backgroundColor:"#A25ABF"
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              size={24}
              color="#000000"
            />
          ),
        }}
        name="Orders"
        component={CashierScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "document-text" : "document-text-outline"}
              size={24}
              color="#000000"
            />
          ),
        }}
        name="Laporan"
        component={TransaksiScreen}
      ></Tabs.Screen>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "fast-food" : "fast-food-outline"}
              size={24}
              color="#000000"
            />
          ),
        }}
        name="Product"
        component={ProductScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
    </SafeAreaView>
  );
}

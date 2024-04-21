import { SafeAreaView } from "react-native";
import React from "react";
import GlobalStyle from "./src/styles/GlobalStyle";
import Routes from "./src/routes";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={GlobalStyle.droidSafeArea}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </SafeAreaView>
    </Provider>
  );
}

import { SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyle from './src/styles/GlobalStyle'
import Routes from './src/routes'
import { PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <SafeAreaView
    style={GlobalStyle.droidSafeArea}
    >
      <PaperProvider>
      <Routes/>
      </PaperProvider>
    </SafeAreaView>
  )
}
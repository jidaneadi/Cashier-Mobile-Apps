import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { API_BASE_URL } from '../../../api/apiConfig';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textFormStyle: {
    marginVertical: 5,
  },
  inputTextStyle: {
    marginVertical: 10,
    height: 70,
  },
  buttonStyle: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#A25ABF",
  },
});
export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      // Check if login is successful
      if (response.ok) {
        // Navigate to Home or wherever you want to navigate after successful login
        navigation.navigate("Home", {
          screen: "Tabsnav",
        });
      } else {
        // Display error message
        Alert.alert('Login Gagal', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while logging in. Please try again.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: "90%",
        }}
      >
        <Text style={styles.textFormStyle}>Email</Text>
        <TextInput
          label="Email"
          value={email}
          style={styles.inputTextStyle}
          onChangeText={(email) => setEmail(email)}
        />
        <Text style={styles.textFormStyle}>Password</Text>
        <TextInput
          label="Password"
          value={password}
          style={styles.inputTextStyle}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          mode="contained"
          style={styles.buttonStyle}
          onPress={handleLogin}
        >
          LOGIN
        </Button>
      </View>
    </View>
  );
}

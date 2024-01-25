import React from 'react'
import { Button } from 'react-native-paper';
import { Ionicons } from "react-native-vector-icons";

export default function ButtonMin() {
  return (
    <Button
      buttonColor="#A25ABF"
      style={{
        marginBottom: 10,
        marginRight: 10,
        width: 60,
      }}
      textColor="white"
    >
      <Ionicons name="remove" />
    </Button>
  )
}

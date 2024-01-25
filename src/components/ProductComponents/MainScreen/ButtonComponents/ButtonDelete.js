import React from "react";
import { Button } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

export default function ButtonDelete() {
  return (
      <Button buttonColor="#E40017" textColor="white">
        <Ionicons name="trash" size={18} /> Hapus
      </Button>
  );
}

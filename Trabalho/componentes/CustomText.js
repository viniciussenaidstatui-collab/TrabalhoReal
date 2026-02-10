import React from "react";
import { Text, StyleSheet } from "react-native";


export default function CustomText({ children }) {
  return (

    <Text style={styles.txt}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textAlign: "center",
    textTransform: "uppercase",
 
    paddingHorizontal: 20, 
  }
});
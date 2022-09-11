import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MyComponent from "./src/MyComponent";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyComponent />
      {/* <Text fontSize:string="18">Hello</Text> */}
      <MaterialIcons name="keyboard-arrow-right" size={50} color="blue" />
      <MaterialIcons name="keyboard-return" size={100} color="red" />
      <MaterialIcons name="laptop-windows" size={85} color="black" />
      <MaterialIcons name="library-add" size={100} color="violet" />
      <Text>Namskara</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

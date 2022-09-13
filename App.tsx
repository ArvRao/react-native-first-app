import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import * as React from "react";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import MyComponent from "./src/MyComponent";
import MonstersAPI from "./src/MonstersAPI";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface MyProps {
  msg?: string;
}

class App extends React.Component<MyProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            color: "yellow",
            fontWeight: "bold",
            fontSize: 29,
            paddingTop: 50,
          }}
        >
          MONSTERS
        </Text>
        <MonstersAPI msg="Welcome all monsters" />
        <StatusBar style="auto" />
        {/* <MyComponent msg="Hi Arvind" /> */}
        {/* <Text fontSize:string="18">Hello</Text> */}
        {/* <MaterialIcons name="keyboard-arrow-right" size={50} color="blue" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(33, 45, 47, 0.97)",
    alignItems: "center",
    // justifyContent: "center",
  },
});

export default App;

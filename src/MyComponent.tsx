import * as React from "react";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const MyComponent = () => (
  <Appbar.Header>
    <Appbar.Content title="Title" subtitle={"Subtitle"} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    <Text>From MyComponent updated kjag</Text>
    <Ionicons name="md-checkmark-circle" size={32} color="green" />
  </Appbar.Header>
);

export default MyComponent;

import * as React from "react";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

interface MyProps {
  msg?: string;
}

class MyComponent extends React.Component<MyProps> {
  render() {
    return (
      <View>
        {/* <Appbar.Header>
          <Appbar.Content title="Title" subtitle={"Subtitle"} />
        </Appbar.Header> */}
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text
          numberOfLines={1}
          onPress={() => {
            console.log("text");
          }}
        >
          From MyComponent! Prop value: {this.props.msg}
        </Text>
        <View>
          <TouchableHighlight
            onPress={() =>
              Alert.alert("Submitted", "My message", [
                {
                  text: "Yes",
                  onPress: () => console.log("Yes"),
                },
                {
                  text: "No",
                  onPress: () => console.log("No"),
                },
              ])
            }
          >
            <Image
              blurRadius={1}
              fadeDuration={1000}
              source={{
                width: 150,
                height: 300,
                uri: "https://picsum.photos/200/300",
              }}
            />
          </TouchableHighlight>
          <Button
            color="orange"
            title="Click here"
            onPress={() => {
              Alert.alert("Submitted", "My message", [
                {
                  text: "No",
                  onPress: () => console.log("No"),
                },
                {
                  text: "Yes",
                  onPress: () => console.log("Yes"),
                },
              ]);
            }}
          ></Button>
          {/* <Button
            color="red"
            title="Enter any text"
            onPress={() => {
              Alert.prompt("Enter any text", "Message", (msg) =>
                console.log(msg)
              );
            }}
          /> */}
          <Text>Hello there</Text>
        </View>
      </View>
    );
  }
}

export default MyComponent;

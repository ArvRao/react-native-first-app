import * as React from "react";
import {
  Appbar,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
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

interface IfaceUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
    phone: string;
    website: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface MyState {
  monstersApi: IfaceUser[];
  searchField: string;
}

export default class MonstersAPI extends React.Component<MyProps, MyState> {
  state: MyState = {
    monstersApi: [],
    searchField: "",
  };
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: IfaceUser[]) =>
        this.setState(() => {
          return {
            monstersApi: users,
          };
        })
      );
  }

  onSearchChange = (val: string) =>
    this.setState(() => {
      return { searchField: val };
    });

  render() {
    const { monstersApi, searchField } = this.state;

    const filteredMonsters = monstersApi.filter((monster) => {
      return monster.name.includes(searchField);
    });

    return (
      <View>
        {/* <Text>{this.props.msg}</Text> */}
        <TextInput
          //   className="search-box"
          //   type="search"
          onChangeText={this.onSearchChange}
          style={styles.input}
          placeholder="search any monster"
        />

        {filteredMonsters.map((monster) => {
          return (
            <Text
              key={monster.id}
              style={{
                fontWeight: "300",
                fontSize: 19,
                textAlign: "center",
                color: "white",
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  textAlign: "justify",
                }}
              >
                {monster.name} {"\n"}
              </Text>
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "dodgerblue",
    padding: 3,
    margin: 10,
    width: 200,
    paddingBottom: 5,
  },
});

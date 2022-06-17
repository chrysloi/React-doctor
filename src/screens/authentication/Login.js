import Styles from "../../Styles/Styles";
import React from "react";
import {
  Text,
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
  // Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import Button from "../../components/Buttons";

const Login = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("Register");
  };
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.login}>
      <Text style={styles.title}>Welcome back!</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          opacity: 0.5,
          alignItems: "center",
        }}
      >
        <Text style={[styles.text, { fontWeight: "900" }]}>
          Don't have an account?
        </Text>
        <TouchableOpacity style={[styles.text, {}]} onPress={onPress}>
          <Text style={{ color: "blue" }}> Create account</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ marginVertical: 10, fontSize: 16 }}>Phone number</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: "#c9c9c9",
          }}
        >
          <TextInput
            placeholder="Enter phone number"
            textContentType="password"
          />
        </View>
      </View>

      <View>
        <Text style={{ marginVertical: 10, fontSize: 16 }}>
          Verification Code
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: "#c9c9c9",
          }}
        >
          <TextInput
            placeholder="Enter verification code"
            textContentType="password"
          />
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Send otp</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Checkbox
          color="#2277fa"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>Remember me!</Text>
      </View>
      {/* <Button title="Next" color="#2277fa" style={{ borderRadius: 10 }} /> */}

      <Button
        name={"Login"}
        onPress={() => {
          navigation.navigate("Main");
        }}
        // pressed={onPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    // paddingTop: 30,
  },
  text: {
    fontSize: 16,
    // fontWeight: "bold"
  },
  login: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    borderRadius: 20,
    height: 20,
  },
});

export default Login;

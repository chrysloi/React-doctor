import Styles from "../../Styles/Styles";
import React from "react";
import {
  Text,
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { Checkbox } from "react-native-paper";

const Register = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.login}>
      <Text style={styles.title}>Create your account!</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          opacity: 0.5,
          alignItems: "center",
        }}
      >
        <Text style={[styles.text, { fontWeight: "900" }]}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={[styles.text, {}]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "blue" }}> Login!</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ marginVertical: 10, fontSize: 16 }}>Username</Text>
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
          <TextInput placeholder="John doe" textContentType="username" />
        </View>
      </View>

      <View>
        <Text style={{ marginVertical: 10, fontSize: 16 }}>E-mail</Text>
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
            placeholder="email@example.com"
            keyboardType="email-address"
          />
        </View>
      </View>

      <View>
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
          <TextInput placeholder="338-596-2459" keyboardType="phone-pad" />
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
        <Text>I accept the terms and Privacy policy</Text>
      </View>
      <Button title="Next" color="#2277fa" style={{ borderRadius: 10 }} />
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

export default Register;

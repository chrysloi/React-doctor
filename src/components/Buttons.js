import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: "#2277fa",
          borderRadius: 15,
          height: 40,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

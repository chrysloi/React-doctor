import React from "react";
import { View, Text, SafeAreaView, Image, Button } from "react-native";
import Slides from "../../components/slides";
import Styles from "../../Styles/Styles";
import AppIntroSlider from "react-native-app-intro-slider";

const OnBoardScreen = ({ navigation }) => {
  const onDone = () => {
    navigation.navigate("Login");
  };

  const onSkip = () => {
    navigation.navigate("Login");
  };

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 50,
          }}
        >
          <Text style={Styles.introTitleSlide}>{item.title}</Text>
          <Text style={Styles.introTextSlide}>{item.text}</Text>
          <Image style={Styles.introImageSlide} source={item.image} />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <AppIntroSlider
      data={Slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
    />
  );
};

export default OnBoardScreen;

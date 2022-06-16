import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const OnBoardScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
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
          <Text style={styles.introTitleSlide}>{item.title}</Text>
          <Text style={styles.introTextSlide}>{item.text}</Text>
          <Image style={styles.introImageSlide} source={item.image} />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={renderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  introTitleSlide: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    // marginBottom: 10,
    fontWeight: "bold",
    paddingTop: 30,
  },
  introImageSlide: {
    width: 400,
    height: 400,
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introTextSlide: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 30,
  },
});

const slides = [
  {
    key: 1,
    title: "Welcome",
    text: "Online consultation and drug purchasing",
    image: require("../../../assets/5200232.jpg"),
    backgroundColor: "#2277fa",
  },
  {
    key: 2,
    title: "Welcome",
    text: "A platform where you get your doctor near you",
    image: {
      uri: "https://img.freepik.com/free-vector/doctor_1196-269.jpg?w=740&t=st=1655304936~exp=1655305536~hmac=96504298727a4b252ae13b6a6d4a1058b283513a6b84cd0b9528d879f95967c2",
    },
    backgroundColor: "#2277fa",
  },
  {
    key: 3,
    title: "Bus Booking",
    text: "Enjoy Travelling on Bus with flat 100% off",
    image: {
      uri: "https://thumbs.dreamstime.com/b/female-doctor-holding-phone-witn-blank-screen-isolated-vector-illustartion-150865034.jpg",
    },
    backgroundColor: "#f6437b",
  },
];

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
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
  introTextSlide: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 30,
    paddingHorizontal: 10,
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
});

export default Styles;

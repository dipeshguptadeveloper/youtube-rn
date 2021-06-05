import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoCard: {},
  thumbnail: {
    aspectRatio: 16 / 9,
    width: "100%",
  },
  timeContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  time: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 13,
    fontWeight: "400",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "4%",
  },

  bar: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "5%",
  },

  box1: {
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginRight: 10,
  },

  box2: {
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginLeft: 10,
  },

  Logo: {
    alignItems: "center",
  },

  text: {
    fontSize: 15,
  },

  faq: {
    padding: "2%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  head: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: "5%",
    letterSpacing: 1,
  },

  q: {
    marginBottom: "3%",
  },

  question: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: "1%",
  },

  answer: {
    fontSize: 13,
    fontWeight: "100",
  },
});

export default styles;

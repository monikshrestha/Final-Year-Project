import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "4%",
    alignItems: "center",
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
  
  aimage: {
    marginTop: 30,
    height: 400,
    width: 300,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "4%",
    alignItems: "center",
  },

  input: {
    marginTop: 20,
    marginVertical: 10,
  },

  subhead: {
    fontSize: 14,
    paddingLeft: 5,
  },

  inputBox: {
    width: 325,
    height: 50,
    backgroundColor: "#FFFFFF",
    color: "black",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },

  inputBox3: {
    width: 325,
    height: 150,
    backgroundColor: "#FFFFFF",
    color: "black",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,
  },

  button:{
    alignItems:"center",
  },

  submitButton: {
    marginTop: 20,
    backgroundColor: "#3ACCE1",
    borderRadius: 14,
    padding: 7,
    width: 100,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    padding: 1,
  },
});

export default styles;

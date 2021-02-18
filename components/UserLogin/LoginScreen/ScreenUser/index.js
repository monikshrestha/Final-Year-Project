import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";

export default function ScreenDriver({ navigation }) {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.back}>
      <ImageBackground
        source={require("../../../../assets/bus.jpg")}
        blurRadius={1}
        style={styles.image}
      />

      <View style={styles.title}>
        <Text style={styles.header}>Welcome </Text>
        <Text style={styles.header}>To</Text>
        <Text style={styles.header}>Sajilo Yatayat</Text>
        <Text style={styles.subheader}>USER LOGIN</Text>
      </View>

      <View style={styles.login}>
        <View style={styles.action}>
          <TextInput
            style={styles.inputBox}
            placeholder="E-mail"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Feather
              style={styles.feather}
              name="check-circle"
              color="black"
              size={20}
            />
          ) : (
            <Feather
              style={styles.feather}
              name="check-circle"
              color="white"
              size={20}
            />
          )}
        </View>

        <View style={styles.action}>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={styles.feather}
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="black" size={20} />
            ) : (
              <Feather name="eye" color="black" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.end}>
        <Text style={styles.footer}>Not part of the app yet?</Text>

        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("SignupMain");
            }}
          >
            <Text style={styles.text}> SIGN UP </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./styles";

const schema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export default function SignupUser({ navigation }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    // Axios.post("http://192.168.1.90:3001/api/register", {
    //   uname: fullname,
    //   uemail: email,
    //   upassword: password,
    // }).then(() => {
    //   alert("sucessful insert");
    // }).catch(err=> alert(err.response))
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
        <Text style={styles.subheader}>User SIGN-UP</Text>
      </View>

      <View style={styles.login}>
        <TextInput
          style={styles.inputBox}
          name="fullname"
          placeholder="Name"
          ref={register}
        />
        <Text> {errors.fullname?.message}</Text>

        <TextInput
          style={styles.inputBox}
          name="email"
          placeholder="E-mail"
          ref={register}
        />
        <Text> {errors.email?.message}</Text>

        <TextInput
          style={styles.inputBox}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          ref={register}
        />
        <Text> {errors.password?.message}</Text>

        <TextInput
          style={styles.inputBox}
          name="confirmPassword"
          placeholder="Re-type Password"
          secureTextEntry={true}
          ref={register}
        />
        <Text> {errors.confirmPassword && "Password should match."}</Text>

        <TouchableOpacity
          style={styles.LoginButton}
          onPress={handleSubmit(submitForm)}
        >
          <Text style={styles.buttonText}>SIGN-UP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.end}>
        <Text style={styles.footer}>Already have an account?</Text>

        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() => {
              console.warn("Signup as a driver or an user");
            }}
          >
            <Text style={styles.text}> SIGN UP </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

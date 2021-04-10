import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  View,
  LogBox,
  Keyboard,
  ImageBackground
} from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import { Surface } from "react-native-paper";
import axios from "axios";
// import { use, useSelector } from "react-redux";

import AppLogo from "../../../elements/AppLogo";
import CustomSnackbar from "../../../elements/CustomSnackbar";
import FormInput from "../../../elements/FormInput";
import FormButton from "../../../elements/FormButton";
import ErrorMessage from "../../../elements/ErrorMessage";

LogBox.ignoreAllLogs();
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(8, "Password must have at least 8 characters "),
});

export default Login = ({ navigation }) => {
  // for snackbar
  const [snackIsVisible, setSnackIsVisible] = useState(false);
  const [snackContent, setSnackContent] = useState("");
  const [snackType, setSnackType] = useState("blue");

  // const dispatch = useDispatch();
  // const Token = useSelector((state) => state.login.authToken);
  // const userData = useSelector((state) => state.login.userData);

  const goToSignup = () => navigation.navigate("Signup");

  const handleOnLogin = async (values) => {
    Keyboard.dismiss();
    userAuthenticated();
    axios
      .post("http://192.168.1.90:3001/login", { values: values })
      .then((res) => {
        setSnackContent(res.data.message);
        setSnackType(res.data.type);
        setSnackIsVisible(true);
        setTimeout(() => {
          setSnackIsVisible(false);
        }, 2500);
      });
  };
  const userAuthenticated = async () => {
    await axios
      .post("/isUserAuth")
      .then((response) => {
        console.log("was here");
        response.data.auth === true && navigation.navigate("Services");
      })
      .catch((err) => console.log(err));

      const Token=axios.defaults.headers.common["authorization"];
    
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
            source={require('../../../assets/bus.jpg')}
            blurRadius={1}
            style={styles.image}
          />

      <Surface
        style={{ margin: 20, marginTop: 120,padding: 10, elevation: 5, borderRadius: 10 }}
      >
        <HideWithKeyboard style={styles.logoContainer}>
          <AppLogo />
        </HideWithKeyboard>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            handleOnLogin(values);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting,
          }) => (
            <Fragment>
              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="Enter email"
                autoCapitalize="none"
                iconColor="#2C384A"
                iconName="email"
                onBlur={handleBlur("email")}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Enter password"
                iconColor="#2C384A"
                secureTextEntry
                iconName="vpn-key"
                onBlur={handleBlur("password")}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#e91e63"
                  // disabled={!isValid || isSubmitting}
                  // loading={isSubmitting}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Don't have an account? Sign Up"
                  onPress={goToSignup}
                  titleStyle={{
                    color: "#039BE5",
                  }}
                  type="clear"
                />
              </View>
            </Fragment>
          )}
        </Formik>
      </Surface>
      <CustomSnackbar
        snackContent={snackContent}
        snackIsVisible={snackIsVisible}
        snackType={snackType}
        setSnackIsVisible={setSnackIsVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  buttonContainer: {
    width: 200,
    marginTop: 30,
    alignSelf: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute', 
  },
});

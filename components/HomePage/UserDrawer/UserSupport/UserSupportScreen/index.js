import React, { useState, Fragment } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  LogBox,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { Headline, Surface } from "react-native-paper";
import axios from "axios";

import CustomSnackbar from "../../../../../elements/CustomSnackbar";
import FormInput from "../../../../../elements/FormInput";
import FormButton from "../../../../../elements/FormButton";
import ErrorMessage from "../../../../../elements/ErrorMessage";

LogBox.ignoreAllLogs();

const validationSchema = Yup.object().shape({
  fedName: Yup.string().label("FName").required("Please enter your name."),
  fedEmail: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email."),
  fedfedback: Yup.string()
    .label("Ffeedback")
    .required("Please enter your feedback."),
});

const UserSupportScreen = ({ navigation }) => {
  //for snackbar
  const [snackIsVisible, setSnackIsVisible] = useState(false);
  const [snackContent, setSnackContent] = useState("");
  const [snackType, setSnackType] = useState("blue");

  const handleOnSubmit = async (values) => {
    Keyboard.dismiss();
    axios
      .post("http://192.168.1.90:3001/feedbackinsert", {
        values,
      })
      .then((res) => {
        setSnackContent(res.data.message);
        setSnackType(res.data.type);
        setSnackIsVisible(true);
        setTimeout(() => {
          setSnackIsVisible(false);
          snackContent === "success" && navigation.goBack();
        }, 2500);
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          fedName: "",
          fedEmail: "",
          fedfedback: "",
        }}
        onSubmit={(values) => handleOnSubmit(values)}
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
          setFieldValue,
        }) => (
          <Fragment>
            <Surface
              style={{
                margin: 20,
                marginBottom: 55,
                elevation: 5,
                borderRadius: 10,
              }}
            >
              <Headline style={{ alignSelf: "center", marginTop: 10 }}>
                Submit Your Feedback
              </Headline>
              <FormInput
                name="fedName"
                value={values.fedName}
                onChangeText={handleChange("fedName")}
                placeholder="Enter Your Name"
                autoCapitalize="words"
                iconColor="#2C384A"
                newIcon={true}
                customIcon={<FontAwesome name="user" size={20} color="black" />}
                onBlur={handleBlur("fedName")}
              />
              <ErrorMessage errorValue={touched.fedName && errors.fedName} />

              <FormInput
                name="fedEmail"
                value={values.fedEmail}
                onChangeText={handleChange("fedEmail")}
                placeholder="Enter Your Email"
                keyboardType="email-address"
                autoCapitalize="none"
                iconColor="#2C384A"
                iconName="email"
                onBlur={handleBlur("fedEmail")}
              />
              <ErrorMessage errorValue={touched.fedEmail && errors.fedEmail} />

              <FormInput
                name="fedfedback"
                value={values.fedfedback}
                onChangeText={handleChange("fedfedback")}
                placeholder="Your Feedback"
                autoCapitalize="words"
                iconColor="#2C384A"
                newIcon={true}
                customIcon={<FontAwesome name="user" size={20} color="black" />}
                onBlur={handleBlur("fedfedback")}
              />
              <ErrorMessage
                errorValue={touched.fedfedback && errors.fedfedback}
              />

              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="Submit"
                  buttonColor="#4169E1"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </View>
            </Surface>
          </Fragment>
        )}
      </Formik>
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
    marginTop:35,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  logoContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    margin: 25,
    marginBottom: 8,
  },
});

export default UserSupportScreen;

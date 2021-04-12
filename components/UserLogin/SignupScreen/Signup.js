import React, { useState, Fragment } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  LogBox,
  ImageBackground,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Headline, Subheading, Surface } from "react-native-paper";
import RadioButtonRN from "radio-buttons-react-native";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";

import CustomSnackbar from "../../../elements/CustomSnackbar";
import FormInput from "../../../elements/FormInput";
import FormButton from "../../../elements/FormButton";
import ErrorMessage from "../../../elements/ErrorMessage";

LogBox.ignoreAllLogs();

const validationSchema = Yup.object().shape({
  fname: Yup.string().label("FName").required("Please enter First Name"),
  lname: Yup.string().label("LName").required("Please enter Last Name"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  phone: Yup.number().label("Phone").min(10).required("Number is required"),
  dob: Yup.date().required("Date is required"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(8, "Password should be at least 8 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
    .required("Confirm Password is required"),
});

const Signup = ({ navigation }) => {
  //for snackbar
  const [snackIsVisible, setSnackIsVisible] = useState(false);
  const [snackContent, setSnackContent] = useState("");
  const [snackType, setSnackType] = useState("blue");

  const handleOnSignup = async (values) => {
    Keyboard.dismiss();
    axios
      .post("http://192.168.1.90:3001/register", {
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
  const [date, setDate] = useState();

  const data = [
    {
      label: "Male",
      value: "M",
    },
    {
      label: "Female",
      value: "F",
    },
    {
      label: "Other",
      value: "O",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bus.jpg")}
        blurRadius={1}
        style={styles.image}
      />
      <View style={styles.bodycontainer}>
        <Formik
          initialValues={{
            fname: "",
            lname: "",
            email: "",
            phone: "",
            password: "",
            gender: "",
            confirmPassword: "",
            dob: "",
          }}
          onSubmit={(values) => handleOnSignup(values)}
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
                <ScrollView>
                  <Headline style={{ alignSelf: "center", marginTop: 10 }}>
                    JOIN US
                  </Headline>
                  <FormInput
                    name="fname"
                    value={values.fname}
                    onChangeText={handleChange("fname")}
                    placeholder="Enter First Name"
                    iconColor="#2C384A"
                    newIcon={true}
                    customIcon={
                      <FontAwesome name="user" size={20} color="black" />
                    }
                    onBlur={handleBlur("fname")}
                  />
                  <ErrorMessage errorValue={touched.fname && errors.fname} />
                  <FormInput
                    name="lname"
                    value={values.lname}
                    onChangeText={handleChange("lname")}
                    placeholder="Enter Last Name"
                    iconColor="#2C384A"
                    newIcon={true}
                    customIcon={
                      <FontAwesome name="user" size={20} color="black" />
                    }
                    onBlur={handleBlur("lname")}
                  />
                  <ErrorMessage errorValue={touched.lname && errors.lname} />
                  <FormInput
                    name="phone"
                    value={values.phone}
                    onChangeText={handleChange("phone")}
                    placeholder="Enter Phone Number"
                    iconColor="#2C384A"
                    newIcon={true}
                    customIcon={
                      <Entypo name="mobile" size={20} color="black" />
                    }
                    onBlur={handleBlur("phone")}
                  />
                  <ErrorMessage errorValue={touched.phone && errors.phone} />
                  <FormInput
                    name="email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    placeholder="Enter email"
                    keyboardType="email-address"
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
                  <ErrorMessage
                    errorValue={touched.password && errors.password}
                  />
                  <FormInput
                    name="password"
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    placeholder="Confirm password"
                    secureTextEntry
                    iconColor="#2C384A"
                    iconName="vpn-key"
                    onBlur={handleBlur("confirmPassword")}
                  />
                  <ErrorMessage
                    errorValue={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                  <View style={{ flex: 1, flexDirection: "row", padding: 22 }}>
                    <FontAwesome
                      style={{ flex: 1, marginTop: 8, marginLeft: 2 }}
                      name="birthday-cake"
                      size={20}
                      color="black"
                    />
                    <DatePicker
                      style={styles.datePickerStyle}
                      date={date} //initial date from state
                      mode="date" //The enum of date, datetime and time
                      placeholder="Date of Birth"
                      format="YYYY-MM-DD"
                      maxDate="2001-01-30"
                      showIcon={false}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: "absolute",
                          left: 0,
                          marginLeft: 0,
                        },
                      }}
                      onDateChange={(date) => {
                        setFieldValue("dob", date);
                        setDate(date);
                      }}
                    />
                  </View>
                  <View style={{ marginLeft: 40, padding: 10, marginTop: 10 }}>
                    <Subheading>Gender</Subheading>
                    <RadioButtonRN
                      initial={0}
                      box={false}
                      circleSize={10}
                      data={data}
                      selectedBtn={(e) => setFieldValue("gender", e.value)}
                    />
                  </View>

                  <View style={styles.buttonContainer}>
                    <FormButton
                      buttonType="outline"
                      onPress={handleSubmit}
                      title="SIGNUP"
                      buttonColor="#0447b3"
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}
                    />
                  </View>
                  <View style={{ marginTop: 8, marginBottom: 10 }}>
                    <Button
                      title="Have an account? Login"
                      onPress={() => navigation.goBack()}
                      titleStyle={{
                        color: "#039BE5",
                      }}
                      type="clear"
                    />
                  </View>
                </ScrollView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodycontainer: {
    flex: 1,
    marginTop: 100,
  },
  logoContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    margin: 25,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  datePickerStyle: {
    flex: 8,
    marginLeft: -45,
  },
});

export default Signup;

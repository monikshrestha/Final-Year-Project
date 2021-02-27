import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Axios } from "axios";

import styles from "./styles";

export default function UserSupportScreen({ navigation }) {

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      fedName: fullname,
      fedEmail: email,
      fedfedback: feedback,
    }).then(() => {
      alert("sucessful insert");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.input}>
          <View style={styles.name}>
            <Text style={styles.subhead}>Full Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Type your Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}    
            />
          </View>

          <View style={styles.email}>
            <Text style={styles.subhead}>E-mail</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="abc@abc.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </View>

          <View style={styles.feedback}>
            <Text style={styles.subhead}>Feedback</Text>
            <TextInput
              style={styles.inputBox3}
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.submitButton}
              onClick={submitReview}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

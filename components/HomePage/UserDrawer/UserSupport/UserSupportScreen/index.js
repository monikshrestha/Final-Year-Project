import React from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import styles from "./styles";

export default function UserSupportScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.input}>
          <View style={styles.name}>
            <Text style={styles.subhead}>Full Name</Text>
            <TextInput style={styles.inputBox} />
          </View>

          <View style={styles.email}>
            <Text style={styles.subhead}>E-mail</Text>
            <TextInput style={styles.inputBox} />
          </View>

          <View style={styles.feedback}>
            <Text style={styles.subhead}>Feedback</Text>
            <TextInput style={styles.inputBox3} />
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

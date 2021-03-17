import React from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function UserSettingTab({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.settings}>
          <View style={styles.profile}>
          <Text style={styles.heading}>Profile</Text>
          </View>

          <View style={styles.app}>
            <Text style={styles.heading}>App</Text>

            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                navigation.navigate("Terms");
              }}
            >
              <View style={styles.notification}>
                <Text style={styles.text}>Terms & Conditions</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                navigation.navigate("Privacy");
              }}
            >
              <View style={styles.notification}>
                <Text style={styles.text}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                navigation.navigate("About");
              }}
            >
              <View style={styles.notification}>
                <Text style={styles.text}>About Us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

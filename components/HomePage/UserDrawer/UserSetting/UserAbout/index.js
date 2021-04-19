import React from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function UserAbout({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.fullcont}>
          <Text style={styles.body}>
            Welcome to Sajilo Yatayat, your number one source for all your
            travel needs. We're dedicated to providing you the very best
            reliable service, without any problems.{" "}
          </Text>

          <Text style={styles.body}>
            Founded in 2020 by Monik, Sajilo Yatayat has come a long way from
            its beginning. When Monik first started out, this app development
            passion for fast reliable service drove them to start their own
            business. We hope you enjoy our products as much as we enjoy
            offering them to you. If you have any questions or comments, please
            don't hesitate to contact us.
          </Text>
          <Text style={styles.head}>**Contact Us**</Text>

          <Text style={styles.body}>
            If you have any questions or suggestions about my Terms and
            Conditions, do not hesitate to contact me at
            business.monikshrestha@gmail.com.
          </Text>
          <Text style={styles.body}>Sincerely, Monik</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import React from "react";

import { AntDesign, Entypo } from "@expo/vector-icons";

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
        <Text>
          Welcome to Travel Inc, your number one source for all your travel
          needs. We're dedicated to providing you the very best reliable
          service, without any problems. Founded in 2020 by Monik, Travel Inc
          has come a long way from its beginning. When Monik first started out,
          this app development passion for fast reliable service drove them to
          start their own business. We hope you enjoy our products as much as we
          enjoy offering them to you. If you have any questions or comments,
          please don't hesitate to contact us. 
          Sincerely, Monik
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

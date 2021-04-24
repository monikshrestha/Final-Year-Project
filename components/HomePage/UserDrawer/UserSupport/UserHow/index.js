import React from "react";

import { AntDesign, Entypo } from "@expo/vector-icons";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function UserHow({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.faq}>

          <View style={styles.qn}>
            <View style={styles.q}>
              <Text style={styles.question}>How do I see the bus?</Text>
              <Text style={styles.answer}>
                Ans: You can already see the bus with real time location.
              </Text>
              <Image
                source={require("../../../../../assets/home.png")}
                style={styles.aimage}
              />
              <Text style={styles.answer}>Fig: Home Page</Text>
            </View>
          </View>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

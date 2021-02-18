import React from "react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function UserProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}></View>
        </View>

        <View style={styles.info}>
          <Text
            style={[
              styles.text,
              { fontWeight: "200", fontSize: 25, color: "black" },
            ]}
          >
            Monik Shrestha
          </Text>
        </View>

        <View style={styles.bar}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate("Bus Updates");
            }}
          >
            <View style={styles.notification}>
            <Icon name="home-outline"  size={24} />
              <Text style={styles.text}>Notification</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.box,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
            onPress={() => {
              navigation.navigate("My Whereabouts");
            }}
          >
            <View style={styles.location}>
            <Icon name="home-outline"  size={24}/>
              <Text style={styles.text}>Location</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate("Setting");
            }}
          >
            <View style={styles.settings}>
            <Icon name="account-check-outline"  size={24} />
              <Text style={styles.text}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

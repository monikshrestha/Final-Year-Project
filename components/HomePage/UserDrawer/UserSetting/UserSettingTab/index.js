import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import DeleteAccountModal from "../../../../../elements/DeleteAccountModal";

import styles from "./styles";

export default function UserSettingTab({ navigation }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.userData);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.settings}>
          <View style={styles.profile}>
            <Text style={styles.heading}>Profile</Text>

            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                setVisible(true);
              }}
            >
              <View style={styles.notification}>
                <Text style={styles.textdanger}>Delete Account</Text>
              </View>
            </TouchableOpacity>
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
      <DeleteAccountModal
        visible={visible}
        setVisible={setVisible}
        userId={[userData.map((item) => item.user_id)]}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

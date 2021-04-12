import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Menu, List } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import DeleteAccountModal from "../../../../elements/DeleteAccountModal";
import styles from "./styles";

export default function UserProfile({ navigation }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.userData);
  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: "black", height: 120 }}>
        <Image
          source={require("../../../../assets/cust.png")}
          style={{ width: "100%", height: "100%", paddingBottom: 10 }}
        />
      </View>
      <View style={{ backgroundColor: "black", height: 40 }}></View>

      <View
        style={{
          height: 120,
          width: 120,
          borderRadius: 60,
          marginTop: -60,
          alignSelf: "center",
          backgroundColor: "grey",
          justifyContent: "center",
          elevation: 5,
        }}
      >
        <FontAwesome5
          name="user-alt"
          size={70}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </View>

      <View style={styles.bar}>
        <TouchableOpacity
          style={[
            styles.box,
            {
              borderColor: "#DFD8C8",
              borderRightWidth: 1,
            },
          ]}
          onPress={() => {
            navigation.navigate("My Whereabouts");
          }}
        >
          <View style={styles.location}>
            <Icon name="home-outline" size={24} />
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
            <Icon name="account-check-outline" size={24} />
            <Text style={styles.text}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>

      {userData.map((item) => (
        <View key={item.user_id}>
          <Surface style={{ margin: 20, borderRadius: 10, padding: 15 }}>
            <List.Item
              titleStyle={{ marginLeft: 15 }}
              title={item.fname + " " + item.lname}
              left={(props) => (
                <Entypo
                  name="user"
                  size={20}
                  {...props}
                  style={{ marginTop: 6 }}
                />
              )}
            />
            <List.Item
              titleStyle={{ marginLeft: 15 }}
              title={moment(item.dob).format("YYYY/MM/DD")}
              left={(props) => (
                <FontAwesome
                  name="birthday-cake"
                  size={20}
                  {...props}
                  style={{ marginTop: 6 }}
                />
              )}
            />
            <List.Item
              titleStyle={{ marginLeft: 15 }}
              title={
                item.gender === "M"
                  ? "Male"
                  : item.gender === "F"
                  ? "Female"
                  : "Others"
              }
              left={(props) => (
                <FontAwesome
                  name="transgender-alt"
                  size={20}
                  {...props}
                  style={{ marginTop: 6 }}
                />
              )}
            />
            <List.Item
              titleStyle={{ marginLeft: 15 }}
              title={item.email}
              left={(props) => (
                <MaterialIcons
                  name="email"
                  size={20}
                  {...props}
                  style={{ marginTop: 6 }}
                />
              )}
            />
            <List.Item
              titleStyle={{ marginLeft: 15 }}
              title={item.phone}
              left={(props) => (
                <Entypo
                  name="mobile"
                  size={20}
                  {...props}
                  style={{ marginTop: 6 }}
                />
              )}
            />
          </Surface>

          <Surface
            style={{
              margin: 20,
              borderRadius: 10,
              backgroundColor: "red",
            }}
          >
            <TouchableOpacity onPress={() => setVisible(true)}>
              <List.Item
                titleStyle={{ color: "white", marginLeft: 15 }}
                rippleColor="red"
                title="Delete Account"
                left={(props) => (
                  <MaterialIcons
                    name="delete"
                    size={25}
                    color="white"
                    style={{ marginTop: 4 }}
                  />
                )}
              />
            </TouchableOpacity>
          </Surface>
        </View>
      ))}
      <DeleteAccountModal
        visible={visible}
        setVisible={setVisible}
        userId={[userData.map((item) => item.user_id)]}
        navigation={navigation}
      />
    </View>
  );
}


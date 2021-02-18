import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function UserSupportMain({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <TouchableOpacity
          style={styles.box1}
          onPress={() => {
            navigation.navigate("Quick Guide");
          }}
        >
          <View style={styles.Logo}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../../../.././assets/map.png")}
            />
            <Text style={styles.text}>How to use?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box2}
          onPress={() => {
            navigation.navigate("Customer Support");
          }}
        >
          <View style={styles.Logo}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../../../.././assets/cust.png")}
            />
            <Text style={styles.text}>Customer Support</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.faq}>
        <Text style={styles.head}>Frequently Asked Question</Text>

        <View style={styles.q}>
          <Text style={styles.question}>
            Do we need to login to use the app?
          </Text>
          <Text style={styles.answer}>
            Ans: Yes, you must be a registered user to access the app.
          </Text>
        </View>

        <View style={styles.q}>
          <Text style={styles.question}>Is the estimated time exact?</Text>
          <Text style={styles.answer}>
            Ans: No, It isn't. It depends on the Traffic.
          </Text>
        </View>

        <View style={styles.q}>
          <Text style={styles.question}>
            Do we have to manually input the location?
          </Text>
          <Text style={styles.answer}>
            Ans: No, you don't. You can use the drop down box as well.
          </Text>
        </View>

        <View style={styles.q}>
          <Text style={styles.question}>Are there any other Routes?</Text>
          <Text style={styles.answer}>
            Ans: No, There isn't. Currently we run only one route.
          </Text>
        </View>

        <View style={styles.q}>
          <Text style={styles.question}>Does this App works?</Text>
          <Text style={styles.answer}>Ans: Yes It does work.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

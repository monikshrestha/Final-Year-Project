import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StatusBar, PermissionsAndroid, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./components/DrawerContent";

import ContentProfile from "./components/ContentNavigation/ContentProfile";
import ContentSupport from "./components/ContentNavigation/ContentSupport";
import ContentRoute from "./components/ContentNavigation/ContentRoute";
import ContentHome from "./components/ContentNavigation/ContentHome";
import RootStackScreen from "./components/RootStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "Sajilo Yatayat Location Permission",
  //         message:
  //           "Sajilo Yatayat needs access to your location " +
  //           "so you can take awesome rides.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("Location permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //       requestLocationPermission();
  //   } else {
  //     // IOS
  //     Geolocation.requestAuthorization();
  //   }
  // }, []); // Empty array means it will run only on component mount

  return (
    <NavigationContainer>
      {/* <RootStackScreen/> */}
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={ContentHome} />
        <Drawer.Screen name="Profile" component={ContentProfile} />
        <Drawer.Screen name="Route" component={ContentRoute} />
        <Drawer.Screen name="Support" component={ContentSupport} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

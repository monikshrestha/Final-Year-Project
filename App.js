import React from "react";

import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./components/DrawerContent";

import UserHome from "./components/HomePage/UserHome";

import ContentProfile from "./components/ContentNavigation/ContentProfile";
import ContentUpdate from "./components/ContentNavigation/ContentUpdate";
import ContentSupport from "./components/ContentNavigation/ContentSupport";
import ContentRoute from "./components/ContentNavigation/ContentRoute";

import RootStackScreen from "./components/RootStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootStackScreen/> */}
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={UserHome} />
        <Drawer.Screen name="Profile" component={ContentProfile} />
        <Drawer.Screen name="Route" component={ContentRoute} />
        <Drawer.Screen name="Update" component={ContentUpdate} />
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

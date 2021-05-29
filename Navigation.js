import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./components/DrawerContent";
import { useDispatch, useSelector } from "react-redux";
import { userData as user, authToken } from "./redux/Login/login-actions";

import ContentProfile from "./components/ContentNavigation/ContentProfile";
import ContentSupport from "./components/ContentNavigation/ContentSupport";
import ContentRoute from "./components/ContentNavigation/ContentRoute";
import ContentHome from "./components/ContentNavigation/ContentHome";
import RootStackScreen from "./components/RootStackScreen";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  // const Token = useSelector((state) => state.login.authToken);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authToken);
  //   dispatch(user);
  // }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // initialRouteName={Token?.length>0?"Home":"Login"}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        {/* <Drawer.Screen name="Login" component={RootStackScreen} /> */}
        <Drawer.Screen name="Home" component={ContentHome} />
        <Drawer.Screen name="Profile" component={ContentProfile} />
        <Drawer.Screen name="Route" component={ContentRoute} />
        <Drawer.Screen name="Support" component={ContentSupport} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

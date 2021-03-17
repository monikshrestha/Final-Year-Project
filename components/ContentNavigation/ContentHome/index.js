import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import UserHome from "../../HomePage/UserHome/index";
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={UserHome}
        options={{
          title: "Home",
          headerLeft: () => {
            <Ionicons.Button
              name="ios-menu"
              size={25}
              onPress={() => navigation.openDrawer()}
            />
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

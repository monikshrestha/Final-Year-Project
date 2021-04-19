import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserHome from "../../HomePage/UserHome/index";
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerTitleAlign: "center",

      headerLeftContainerStyle: { marginLeft: 30},
      headerRightContainerStyle: { marginRight: 25},
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={UserHome}
        options={{
          title: "Home",
          headerLeft: () => {
            <TouchableOpacity>
              <Icon
                name="menu"
                size={24}
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            </TouchableOpacity>
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

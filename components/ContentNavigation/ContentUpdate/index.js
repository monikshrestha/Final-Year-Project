import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import UserUpdate from "../../HomePage/UserDrawer/UserUpdate";

const UpdateStack = createStackNavigator();

const UpdateStackScreen = ({ navigation }) => {
  return (
    <UpdateStack.Navigator>
      <UpdateStack.Screen name="Bus Updates" component={UserUpdate} />
    </UpdateStack.Navigator>
  );
};

export default UpdateStackScreen;

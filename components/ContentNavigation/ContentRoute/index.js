import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import UserRoutes from "../../HomePage/UserDrawer/UserRoutes";

const RouteStack = createStackNavigator();

const RouteStackScreen = ({ navigation }) => {
  return (
    <RouteStack.Navigator>
      <RouteStack.Screen name="Route" component={UserRoutes} 
            options={{
              title: "Bus Routes",
            }} />
    </RouteStack.Navigator>
  );
};

export default RouteStackScreen;

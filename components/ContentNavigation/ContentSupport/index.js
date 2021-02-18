import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import UserSupportMain from "../../HomePage/UserDrawer/UserSupport/UserSupportMain";
import UserHow from "../../HomePage/UserDrawer/UserSupport/UserHow";
import UserSupportScreen from "../../HomePage/UserDrawer/UserSupport/UserSupportScreen";

const SupportStack = createStackNavigator();

const SupportStackScreen = ({ navigation }) => {
  return (
    <SupportStack.Navigator>
      <SupportStack.Screen name="Support" component={UserSupportMain} />
      <SupportStack.Screen name="Quick Guide" component={UserHow} />
      <SupportStack.Screen name="Customer Support" component={UserSupportScreen} />
    </SupportStack.Navigator>
  );
};

export default SupportStackScreen;

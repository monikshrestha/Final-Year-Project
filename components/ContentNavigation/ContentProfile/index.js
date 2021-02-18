import React from "react";

import UserLocation from "../../HomePage/UserDrawer/UserLocation";
import UserSettingTab from "../../HomePage/UserDrawer/UserSetting/UserSettingTab";
import UserUpdate from "../../HomePage/UserDrawer/UserUpdate";
import UserProfile from "../../HomePage/UserDrawer/UserProfile";
import UserAbout from "../../HomePage/UserDrawer/UserSetting/UserAbout";
import UserPrivacy from "../../HomePage/UserDrawer/UserSetting/UserPrivacy";

import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={UserProfile} />
      <ProfileStack.Screen name="My Whereabouts" component={UserLocation} />
      <ProfileStack.Screen name="Bus Updates" component={UserUpdate} />
      <ProfileStack.Screen name="Setting" component={UserSettingTab} />
      <ProfileStack.Screen name="Privacy" component={UserPrivacy} />
      <ProfileStack.Screen name="About" component={UserAbout} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;

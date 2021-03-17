import React from "react";

import UserLocation from "../../HomePage/UserDrawer/UserLocation";
import UserSettingTab from "../../HomePage/UserDrawer/UserSetting/UserSettingTab";
import UserProfile from "../../HomePage/UserDrawer/UserProfile";
import UserAbout from "../../HomePage/UserDrawer/UserSetting/UserAbout";
import UserPrivacy from "../../HomePage/UserDrawer/UserSetting/UserPrivacy";
import UserTerms from "../../HomePage/UserDrawer/UserSetting/UserTerms";

import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={UserProfile} />
      <ProfileStack.Screen name="My Whereabouts" component={UserLocation} 
            options={{
              title: "My Location",
            }} />
      <ProfileStack.Screen name="Setting" component={UserSettingTab} />
      <ProfileStack.Screen name="Privacy" component={UserPrivacy}
      options={{
          title: "Privacy Policy",
        }} 
      />
      <ProfileStack.Screen name="About" component={UserAbout} 
            options={{
              title: "About Us",
            }} />

          <ProfileStack.Screen name="Terms" component={UserTerms} 
          options={{
            title: "Terms & Conditions",
          }} />
  </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;

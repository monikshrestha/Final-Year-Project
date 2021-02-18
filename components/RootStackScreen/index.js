import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "../UserLogin/MainScreen";
import ScreenDriver from "../UserLogin/LoginScreen/ScreenDriver";
import ScreenUser from "../UserLogin/LoginScreen/ScreenUser";
import SignupMain from "../UserLogin/SignupScreen/SignupMain";
// import SignupDriver from "../UserLogin/SignupScreen/SignupDriver";
import SignupUser from "../UserLogin/SignupScreen/SignupUser";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="MainScreen" component={MainScreen}/>
        <RootStack.Screen name="ScreenDriver" component={ScreenDriver}/>
        <RootStack.Screen name="ScreenUser" component={ScreenUser}/>
        <RootStack.Screen name="SignupMain" component={SignupMain}/>
        {/* <RootStack.Screen name="SignupDriver" component={SignupDriver}/> */}
        <RootStack.Screen name="SignupUser" component={SignupUser}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
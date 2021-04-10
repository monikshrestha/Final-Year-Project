import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "../UserLogin/MainScreen";
import LoginScreen from '../UserLogin/LoginScreen/Login';
import SignupScreen from '../UserLogin/SignupScreen/Signup';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="MainScreen" component={MainScreen}/>
        <RootStack.Screen name="Signup" component={SignupScreen}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
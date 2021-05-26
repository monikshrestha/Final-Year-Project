import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
import React, {useEffect, useRef,useState} from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./Navigation";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Drawer = createDrawerNavigator();

export default function App() {
  // const notificationListener = useRef();
  // const responseListener = useRef();
  
  // const [notification, setNotification] = useState(false);
  useEffect(() => {
    registerForPushNotification().then(token=>console.log(token));
    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   console.log(notification);
    // });
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    // });
    // return () => {
    //   cleanup
    // }
  }, [])

  async function registerForPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // finalStatus = status;
    }
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


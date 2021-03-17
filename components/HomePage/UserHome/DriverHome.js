import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MapView from "react-native-maps";

export default class DriverHome extends React.Component {
  constructor(props) {
    super(props);
    const driver = this.props.driver
      ? this.props.driver
      : {
          uid: "noDriversPassed",
          location: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longiDelta: 0,
          },
        };

    const coordinate = new MapView.AnimatedRegion({
      latitude: driver.location.latitude,
      longitude: driver.location.longitude,
    });

    this.state = {
      driver: driver,
      coordinate: coordinate,
    }
  }

  render() {
    return (
      <MapView.Marker.Animated
        coordinate={this.state.coordinate}
        anchor={{ x: 0.35, y: 0.32 }}
        ref={marker => {
          this.marker = marker;
        }}
        style ={{ width: 50, height: 50}}
        
      >
        <Image
          source={require("../../../assets/deck.png")}
          style={{
            width: 32,
            height: 32,
          }}
        />
      </MapView.Marker.Animated>
    );
  }
}

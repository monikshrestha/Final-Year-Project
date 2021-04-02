import React from "react";
import {
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MapView, { MapViewAnimated } from "react-native-maps";

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
          }
        }

    const coordinate = ({
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
      <MapView.Marker
        coordinate={this.state.coordinate}
        anchor={{ x: 0.35, y: 0.32 }}
        ref={marker => {
          this.marker = marker;
        }}
        style ={{ width: 50, height: 50}}
        
      >
        <Image
          source={require("../../../assets/bus1.png")}
          style={{
            width: 35,
            height: 35,
          }}
        />
      </MapView.Marker>
    );
  }
}

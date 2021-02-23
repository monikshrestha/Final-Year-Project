import React, { Component } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import MapView from "react-native-maps";
import Geocoder from "react-native-geocoder";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialregion: {
        latitude: 27.7215,
        longitude: 85.32,
        latitudeDelta: 0.09,
        longitudeDelta: 0.0921,
      },
      locationChosen: false,
      marginBottom: 1,
      currentAddress: "",
    };
  }

  componentDidMount() {
    this.handleUserLocation();
    setTimeout(() => this.setState({ marginBottom: 0 }), 100);
  }

  handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // alert (JSON.stringify(pos.coords.longitude))
        this.map.animateToRegion({
          ...this.state.initialregion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });

        this.setState({
          initialRegion: {
            ...this.state.initialregion,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          locationChosen: true,
        })
        this.getAddress(pos.coords.latitude,  pos.coords.longitude)
      },
      (err) => {
        console.log(err);
        alert("Something Went Wrong!");
      }
    );
  };

  getAddress = async (lat, lng) => {
    await Geocoder.fallbackToGoogle(AIzaSyDzwiVNN5eFsj_b70kJdwl_lezkomy23mo);
    try {
      let ret = await Geocoder.geocodePosition({ lat, lng });
      let addr = res[0].formattedAddress;

      this.setState({
        currentAddress: addr,
      });
    } catch (err) {
      alert(err);
    }
  };

  onChangeValue = initialRegion =>{
    ToastAndroid.show(JSON.stringify(this.state.currentAddress), ToastAndroid.SHORT)
    this.setState({
      initialRegion
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1, marginBottom: this.state.marginBottom }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={this.state.initialregion}
          onRegionChangeComplete={this.onChangeValue}
          ref={(ref) => (this.map = ref)}
        />
      </View>
    );
  }
}

export default Map;

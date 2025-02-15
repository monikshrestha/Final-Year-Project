import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";

import Polyline from "@mapbox/polyline";
import Axios from "axios";

import MapView, { Marker } from "react-native-maps";


const locations = require('../../../../locations.json')
const { width, height } = Dimensions.get('screen')

export default class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    locations: locations
  }

  async componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log('Error:', error)
    )

    const { locations: [ sampleLocation ] } = this.state

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
    }, this.mergeCoords)
  }

  mergeCoords = () => {
    const {
      latitude,
      longitude,
      desLatitude,
      desLongitude
    } = this.state

    const hasStartAndEnd = latitude !== null && desLatitude !== null

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`
      const concatEnd = `${desLatitude},${desLongitude}`
      this.getDirections(concatStart, concatEnd)
    }
  }

  async getDirections(startLoc, desLoc) {
    try {
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyDe_cLrUFFrFTglZbCExNBYJL80lEbzECI`)
      const respJson = await resp.json();
      const response = respJson.routes[0]
      const distanceTime = response.legs[0]
      const distance = distanceTime.distance.text
      const time = distanceTime.duration.text
           const points = Polyline.decode(
          respJson.routes[0].overview_polyline.points
        );
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords, distance, time })
    } catch(error) {
      console.log('Error: ', error)
    }
  }

  onMarkerPress = location => () => {
    const { coords: { latitude, longitude } } = location
    this.setState({
      destination: location,
      desLatitude: latitude,
      desLongitude: longitude
    }, this.mergeCoords)
  }

  renderMarkers = () => {
    const { locations } = this.state
    return (
      <View>
        {
          locations.map((location, idx) => {
            const {
              coords: { latitude, longitude }
            } = location
            return (
              <Marker
                key={idx}
                coordinate={{ latitude, longitude }}
                onPress={this.onMarkerPress(location)}
              />
            )
          })
        }
      </View>
    )
  }

  render() {
    const {
      time,
      coords,
      distance,
    } = this.state
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 27.7215,
            longitude: 85.32,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
        <View
          style={{
              width,
              paddingTop: 10,
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              justifyContent: 'flex-end',
          }}>
          <Text style={{ fontWeight: 'bold' }}>Estimated Time: {time}</Text>
          <Text style={{ fontWeight: 'bold' }}>Estimated Distance: {distance}</Text>
        </View>
        {this.renderMarkers()}
        <MapView.Polyline
          strokeWidth={2}
          strokeColor="red"
          coordinates={coords}
        />

      </MapView>
      );
    }
  }

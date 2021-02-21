import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 27.7215,
        longitude: 85.32,
        latitudeDelta: 0.09,
        longitudeDelta: 0.0921,
      },
      mark: {
        latitude: 27.759668,
        longitude: 85.317578,
      },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={this.state.region}>
          <Marker coordinate={this.state.mark} title="My Location" />
        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;

import React, { useEffect } from "react";
import { StatusBar, PermissionsAndroid, Platform, View } from "react-native";
import MapView from "react-native-maps";
import DriverHome from "./DriverHome";
import { DestinationButton } from "./DestinationButton";

class MapHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 27.7215,
        longitude: 85.32,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      locationChosen: false,
      marginBottom: 1,
    };
  }
    componentDidMount = () => {
      this.handleUserLocation();
      setTimeout(() => this.setState({ marginBottom: 0 }), 100);
    };

    handleUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          // alert (JSON.stringify(pos))
          this.map.animateToRegion({
            ...this.state.region,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });

          this.setState({         
            initialRegion:{
            ...this.state.region,
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
          }, locationChosen: true });
        },
        (err) => {
          console.log(err);
          alert("Something Went Wrong!");
        }
      );
    };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1, marginBottom : this.state.marginBottom }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          rotateEnabled={true}
          initialRegion={this.state.region}
          ref ={(map) => this.map = map}
        >
          <DriverHome
            driver={{
              uid: "hello",
              location: {
                latitude: 27.7350,
                longitude: 85.32,
              },
            }}
          />
        </MapView>
      </View>
    );
  }
}

export default MapHome;

//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: "Sajilo Yatayat Location Permission",
//         message:
//           "Sajilo Yatayat needs access to your location " +
//           "so you can take awesome rides.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the location");
//     } else {
//       console.log("Location permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }

// useEffect(() => {
//   if (Platform.OS === "android") {
//       requestLocationPermission();
//   } else {
//     // IOS
//     Geolocation.requestAuthorization();
//   }
// }, []); // Empty array means it will run only on component mount

//   componentDidMount=()=> {
//   this.handleUserLocation();
//   setTimeout(() => this.setState({ marginBottom: 0 }), 400);
// }



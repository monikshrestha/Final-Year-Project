import React from 'react';
import {
  View,
} from 'react-native';
import MapView from 'react-native-maps';


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
      marginBottom : 1,
    }
  }

  componentDidMount(){
    this.handleUserLocation();
    setTimeout(()=>this.setState({marginBottom: 0}),100)
  }

  handleUserLocation = ()=>{
    navigator.geolocation.getCurrentPosition(pos => {
      // alert (JSON.stringify(pos))
      this.map.animateToRegion({
        ...this.state.initialregion,
        latitude : pos.coords.latitude,
        longitude : pos.coords.longitude
      })

      this.setState({
        initialRegion:{
        ...this.state.initialregion,
        latitude : pos.coords.latitude,
        longitude : pos.coords.longitude
      },
      locationChosen:true
    })
    },
      err =>{
        console.log(err);
        alert("Something Went Wrong!")
    })
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <MapView style={{flex:1, marginBottom : this.state.marginBottom}} 
        showsUserLocation = {true}
        showsMyLocationButton ={true}
        initialRegion={this.state.initialregion}
        ref ={ref => this.map =ref}
        />
      </View>
    );
  }
}

export default Map;

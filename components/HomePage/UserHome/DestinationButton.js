import React from "react";
import {
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
const WIDTH = Dimensions.get('window').width;

export const DestinationButton = function (props) {
  return (  
  <View 
    onPress={() => {}}
    style={styles.container}
  >
      <View style={styles.leftCol}>
      <Ionicons name="md-search" color= "#000000" size={25} style={{alignSelf: 'center'}}/>
      </View>
      <TouchableOpacity style={styles.centerCol}>
            <Text style={{fontFamily: 'sans-serif-thin', fontSize:21, color: '#545454'}}>
                Where To?
            </Text>
      </TouchableOpacity>
      <View style={styles.rightCol}>
            <Ionicons name="md-bus" color= "#000000" size={25} style={{alignSelf: 'center'}}/>
      </View>

  </View>
  )
};

const styles = StyleSheet.create({
    container:{
        zIndex: 9,
        position: 'absolute',
        flexDirection:'row',
        width: (WIDTH-40),
        height: 50,
        top: 10,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },

    leftCol:{
        flex: 1,
        alignItems: 'center',
    },
    centerCol:{
        flex:4,
    },
    rightCol:{
        flex:1, 
        borderLeftWidth:1, 
        borderColor: "#ededed",
    }
})
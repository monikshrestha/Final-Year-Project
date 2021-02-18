import React from 'react';

import { AntDesign, Entypo, } from "@expo/vector-icons";

import{
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from "./styles";

export default function UserUpdate({navigation}) {
    return(
        
        <SafeAreaView style={styles.container}>
           <ScrollView showsVerticalScrollIndicator={false}>

           <Text> Bus Update Page</Text>

           </ScrollView>
       </SafeAreaView>
    ); 
};


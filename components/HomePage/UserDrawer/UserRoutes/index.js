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

export default function UserRoutes({navigation}) {
    return(
        
        <SafeAreaView style={styles.container}>
           <ScrollView showsVerticalScrollIndicator={false}>

           <Text> Routes Page</Text>

           </ScrollView>
       </SafeAreaView>
    ); 
};


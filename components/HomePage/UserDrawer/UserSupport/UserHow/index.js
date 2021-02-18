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

export default function UserHow({navigation}) {
    return(
        
        <SafeAreaView style={styles.container}>
           <ScrollView showsVerticalScrollIndicator={false}>

                <Text> How to Use the app.</Text>

           </ScrollView>
       </SafeAreaView>
    ); 
};


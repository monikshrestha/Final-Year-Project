import React from 'react';

import{
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

export default function UserHome({navigation}) {
    return(
        <View style= {{flex:1, alignItems: 'center', justifyContent:'center'}}>
            <Text>Home Screen</Text>
        </View>    
    ); 
};

import React from 'react';
import {Text, View, ImageBackground } from 'react-native';


import styles from './styles';
import StyledButton from '../../StyledButton';


export default function SignupMain({navigation}) {
    return (

        <View style={styles.back}> 
          <ImageBackground 
            source={require('../../../../assets/bus.jpg')}
            blurRadius={1}
            style={styles.image}
          />
          
          <View style={styles.title}> 

            <Text style={styles.header}>Welcome </Text>
            <Text style={styles.header}>To</Text>
            <Text style={styles.header}>Sajilo Yatayat</Text>
            <Text style={styles.subheader}> Sign up to be the part of the application. </Text>
          
          </View>

          <View style={styles.buttonsContainer}>
            
            <StyledButton 
              type="primary"
              content={"User Sign-up"}
              onPress={() => {
                navigation.navigate("SignupUser");
            }} />

            <StyledButton 
              type="secondary"
              content={"Driver Sign-up"}
              onPress={() => {
                navigation.navigate("SignupUser");
            }} />

          </View>
        
          <View style={styles.end}>

            <Text style={styles.footer}>By continuing, you agree to accept our Terms of Service & Privacy Policy.</Text>

          </View>
        </View>

    );
};


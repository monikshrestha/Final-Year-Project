import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

export default function MainScreen({navigation}) {
  
    return (

        <View style={styles.back}> 
          <ImageBackground 
            source={require('../../../assets/bus.jpg')}
            blurRadius={1}
            style={styles.image}
          />
          
          <View style={styles.title}> 

            <Text style={styles.header}>Welcome </Text>
            <Text style={styles.header}>To</Text>
            <Text style={styles.header}>Sajilo Yatayat</Text>
            <Text style={styles.subheader}>The best way to travel to your desired location at your fingertips. 
            Let's get started!</Text>
          
          </View>

          <View style={styles.buttonsContainer}>            

            <StyledButton 
              type="primary"
              content={"Login"}
              onPress={() => 
               navigation.navigate("Login")  
            }/>      

            <StyledButton 
              type="primary"
              content={"Register"}
              onPress={() => 
                navigation.navigate("Signup")
              }/>           

          </View>
        
          <View style={styles.end}>

            <Text style={styles.footer}>By continuing, you agree to accept our Terms of Service & Privacy Policy.</Text>

          </View>
        </View>

    );
};



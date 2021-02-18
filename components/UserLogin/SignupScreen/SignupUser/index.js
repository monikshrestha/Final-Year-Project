import React from 'react';
import {Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import styles from './styles';


export default function SignupUser({navigation}) {
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
            <Text style={styles.subheader}>DRIVER LOGIN</Text>
          
          </View>

          <View style={styles.login}>
            
              <TextInput style={styles.inputBox} 
              placeholder="Name"
              />

              <TextInput style={styles.inputBox} 
              placeholder="E-mail"
              />

              <TextInput style={styles.inputBox} 
              placeholder="Password"
              secureTextEntry={true}
              />

              <TextInput style={styles.inputBox} 
              placeholder="Re-type Password"
              secureTextEntry={true}
              />
          
            <TouchableOpacity style={styles.LoginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          
          </View>
        
          <View style={styles.end}>

            <Text style={styles.footer}>Not part of the app yet?</Text>

              <View style={styles.container}>

                <Pressable
                
                  style={styles.button}
                  onPress={() => {
                  console.warn('Signup as a driver or an user')

                }}>

                <Text style={styles.text}> SIGN UP </Text>

                </Pressable>
                
              </View>

          </View>
        
        </View>

    );
};


import React from 'react';
import {Text, View, Pressable } from 'react-native';
import styles from './styles';

export default function StyledButton(props) {
    
    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#3ACCE1' : '#353A50';
    
    return (

        <View style={styles.container}> 
            
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={()=> onPress()}
                >
                
                <Text style={styles.text}> {content} </Text>
            </Pressable>
        </View>
    );
};


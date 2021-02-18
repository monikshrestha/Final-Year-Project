import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    back: {
      flex: 1,
      },
    
      title: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
      },
    
      header: {
        fontSize: 40,
        fontWeight: '500',
        color: 'white',
      },
    
      subheader: {
        marginTop: '4%',
        alignItems: 'center',
        width: '80%',
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute', 
      },

      buttonsContainer:{
        paddingTop: 20, 
      },

      end:{
        paddingTop: 10, 
      },
      
      footer:{
        color: 'white',
        textAlign: 'center',
        width: '90%',
        paddingLeft: 40,
      }

    });

export default styles;
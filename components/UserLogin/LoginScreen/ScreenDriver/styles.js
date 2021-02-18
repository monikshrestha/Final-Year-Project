import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: "4%",
    alignItems: "center",
  },

    back: {
        width: '100%',
        height: '100%',
      },
    
      title: {
        marginTop: '16%',
        width: '100%',
        alignItems: 'center',
       
       
      },
    
      header: {
        fontSize: 40,
        fontWeight: '500',
        color: 'white',
      },
    
      subheader: {
        marginTop: '3%',
        alignItems: 'center',
        width: '80%',
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute', 
      },

       login:{
         marginTop: 30,
          marginVertical: 10,
         justifyContent: 'center',
         alignItems: 'center',
       },

       inputBox:{
        width: 325,
        height: 50,
        backgroundColor: '#FFFFFF',
        color: 'black', 
        borderRadius: 14,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
       },

       LoginButton:{
        marginTop: 20,
        backgroundColor: '#3ACCE1',
        borderRadius: 14,
        padding: 7,
        width: 90, 
        alignItems: 'center',
       },

      buttonText:{
        fontSize: 20,
        fontWeight:'600',
        color: 'white',
        textAlign: 'center',
        padding: 1,
      },

      
      end:{
        flexGrow: 1,
        justifyContent: 'center',
       },
       
       footer:{
         color: 'white',
         textAlign: 'center',
         alignItems: 'center',
         
       },
 

      button:{
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

      },

      text:{
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
      }

    });

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

bar:{
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: 'black', 
    width: '90%',
    borderRadius:10,
    padding: '1%',
},

box:{
    alignItems: "center",
    flex: 1,
},

notification:{
    alignItems:'center',
}, 

location:{
    alignItems:'center',
}, 

settings:{
    alignItems:'center',
}, 


});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

bar:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: 'white', 
    width: '90%',
    borderRadius:10,
    padding: '1%',
    height: "9%",
},

box:{
    alignItems: "center",
    flex: 1,
    width:170,
},

location:{
    alignItems:'center',
}, 

settings:{
    alignItems:'center',
}, 


});

export default styles;
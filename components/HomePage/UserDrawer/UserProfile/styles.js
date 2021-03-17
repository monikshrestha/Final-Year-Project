import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    flex: 1,
},

image: {
    flex: 1,
    height: undefined,
    width: undefined,
},

info:{
    alignItems: 'center'
},

titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
},

profileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    alignItems:"center",
},

bar:{
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: '#F5F5F5', 
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
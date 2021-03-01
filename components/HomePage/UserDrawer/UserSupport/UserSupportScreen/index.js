import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";

import Axios from "axios";

import styles from "./styles";

export default function UserSupportScreen({ navigation }) {

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setfedback] = useState('');

  const submitReview = () => {

    console.log("It works");
    // Axios.get("http://27.34.30.31/poop").then(res=>{
    //   alert(res);
    // })

    Axios.post("http://192.168.1.90:3001/api/insert", {
      fedName: fullname,
      fedEmail: email,
      fedfedback: feedback,
    }).then(() => {
      alert("sucessful insert");
    }).catch(err=> alert(err.response))
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.input}>
          <View style={styles.name}>
            <Text style={styles.subhead}>Full Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Type your Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}    
            />
          </View>

          <View style={styles.email}>
            <Text style={styles.subhead}>E-mail</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="abc@abc.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </View>

          <View style={styles.feedback}>
            <Text style={styles.subhead}>Feedback</Text>
            <TextInput
              style={styles.inputBox3}
              onChange={(e) => {
                setfedback(e.target.value);
              }}
            />
          </View>

          <Button
          title="Press me"
          onPress={submitReview}
          />
          {/* <View style={styles.button}>
            <TouchableOpacity
              style={styles.submitButton}
              onClick={submitReview}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

// class UserSupportScreen extends Component{
//   constructor(){
//     super();
//     this.state={
//       fname:'',
//       femail:'',
//       ffedback:'',
//     }
//   }

//   updateValue(inputvalue, field){
//     if(field=='fname')
//     {
//       this.setState({
//         fname:inputvalue,
//       })
//     }
//     else if(field=='femail')
//     {
//       this.setState({
//         femail:inputvalue,
//       })
//     }
//     else if(field=='ffedback')
//     {
//       this.setState({
//         ffedback:inputvalue,
//       })
//     }
//   }

//   submit(){
//     let collection ={}
//     collection.fname=this.state.fname,
//     collection.femail=this.state.femail,
//     collection.ffedback=this.state.ffedback,

//     console.warn(collection);
//   };


//   render(){
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.body}>
//         <View style={styles.input}>
//           <View style={styles.name}>
//             <Text style={styles.subhead}>Full Name</Text>
//             <TextInput
//               style={styles.inputBox}
//               onChangeText={(inputvalue) =>
//                 this.updateValue(inputvalue, "fname")
//               }
//             />
//           </View>

//           <View style={styles.email}>
//             <Text style={styles.subhead}>E-mail</Text>
//             <TextInput
//               style={styles.inputBox}
//               onChangeText={(inputvalue) =>
//                 this.updateValue(inputvalue, "femail")
//               }
//             />
//           </View>

//           <View style={styles.feedback}>
//             <Text style={styles.subhead}>Feedback</Text>
//             <TextInput
//               style={styles.inputBox3}
//               onChangeText={(inputvalue) =>
//                 this.updateValue(inputvalue, "ffedback")
//               }
//             />
//           </View>

//           <View style={styles.button}>
//             <TouchableOpacity
//               style={styles.submitButton}
//               onPress={()=>this.submit()}           
//               >
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
// }
// export default UserSupportScreen;
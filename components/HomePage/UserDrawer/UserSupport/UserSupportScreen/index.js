// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Button
// } from "react-native";

// import Axios from "axios";

// import styles from "./styles";

// export default function UserSupportScreen({ navigation }) {

//   const [fullname, setfullName] = useState('');
//   const [email, setemail] = useState('');
//   const [feedback, setfeedback] = useState('');

//   const submitReview = () => {

//     console.log(fullname, email, feedback);
//     // Axios.post("http://192.168.1.90:3001/api/insert", {
//     //   fedName: fullname,
//     //   fedEmail: email,
//     //   fedfeedback: feedback,
//     // }).then(() => {
//     //   alert("sucessful insert");
//     // }).catch(err=> alert(err.response))
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.body}>
//         <View style={styles.input}>
//           <View style={styles.name}>
//             <Text style={styles.subhead}>Full Name</Text>
//             <TextInput
//               style={styles.inputBox}
//               placeholder="Type your Full Name"
//               name= "fullname"
//               onChange={(e) => {
//                 setfullName(e.target.value);
//               }}
//             />
//           </View>

//           <View style={styles.email}>
//             <Text style={styles.subhead}>E-mail</Text>
//             <TextInput
//               style={styles.inputBox}
//               placeholder="abc@abc.com"
//               name="email"
//               onChange={(e) => {
//                 setemail(e.target.value);
//               }}
//             />
//           </View>

//           <View style={styles.feedback}>
//             <Text style={styles.subhead}>Feedback</Text>
//             <TextInput
//               style={styles.inputBox3}
//               name="feedback"
//               onChange={(e) => {
//                 setfeedback(e.target.value);
//               }}
//             />
//           </View>

//           {/* <Button
//           title="Press me"
//           onPress={submitReview}
//           /> */}
//           <View style={styles.button}>
//             <TouchableOpacity
//               style={styles.submitButton}
//               onPress={submitReview}
//             >
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

import styles from "./styles";

const feedbackSchema = yup.object().shape({
  fullname: yup.string().required("Invalid Name!!"),
  email: yup.string().email().required("Invalid Email!!"),
  feedback: yup.string().required("Fill the form"),
});

export default function UserSupportScreen({ navigation }) {
  // const initialValues = {
  //   fullname: "",
  //   email: "",
  //   feedback: "",
  // };

  // const onSubmit = (values) => {
  //   console.log(values);
  //   // Axios.post("http://192.168.1.90:3001/api/insert", {
  //   //   fedName: fullname,
  //   //   fedEmail: email,
  //   //   fedfedback: feedback,
  //   // }).then(() => {
  //   //   alert("sucessful insert");
  //   // }).catch(err=> alert(err.response))
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Formik
        initialValues={{   
          fullname: "",
          email: "",
          feedback: ""}}
          // validationSchema={feedbackSchema}
          onSubmit={(values)=>{
            console.log(values);
          }}
          enableReinitialize={false}
        >
          {(props) => (
            <View style={styles.input}>
              <View style={styles.name}>
                <Text style={styles.subhead}>Full Name</Text>
                <TextInput
                  style={styles.inputBox}
                  onChange={props.handleChange("fullname")}
                  value={props.values.fullname}
                />
              </View>

              <View style={styles.email}>
                <Text style={styles.subhead}>E-mail</Text>

                <TextInput
                  style={styles.inputBox}
                  onChange={props.handleChange("email")}
                  value={props.values.email}
                />
              </View>

              <View style={styles.feedback}>
                <Text style={styles.subhead}>Feedback</Text>
                <TextInput
                  style={styles.inputBox3}
                  onChange={props.handleChange("feedback")}
                  value={props.values.feedback}
                />
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

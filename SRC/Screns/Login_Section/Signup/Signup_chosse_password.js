import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import { containerFull, goback, logo1 } from '../../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { formHead2, formHead3, formInput, formbtn } from '../../../CommonCss/Formcss';

const Signup_chosse_password = ({ navigation, route }) => {

  const { email, username } = route.params;
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [loading, setLoading] = useState(false)


  const handlePassword = () => {

    // navigation.navigate('Signup_AccountCreated')
    if (password == '' || confirmpassword == '') {
      alert('Please enter password')
    } else if (password != confirmpassword) {
      alert('Password does not match')
    }
    else {
      setLoading(true)
      fetch('http://192.168.43.24:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, username: username, password: password })
      })
        .then(res => res.json()).then(
          data => {
            if (data.message === "User Registered Successfully") {
              setLoading(false)
              alert(data.message);
              navigation.navigate('Login')
            }
            else {
              setLoading(false)
              alert("Please try again");
            }
          }
        )
    }
  }
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback} >
        <Ionicons name="arrow-back" size={24} color="gray" />
        <Text style={{
          color: 'gray',
          fontSize: 17,
          marginLeft: 5,
          fontWeight: 'bold'
        }}>
          Go back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1} />
      <Text style={formHead2}>Choose a Strong Password</Text>
      <TextInput placeholder='Enter password' style={formInput} secureTextEntry onChangeText={(text) => setpassword(text)}/>
      <TextInput placeholder='Conform password' style={formInput} secureTextEntry onChangeText={(text) => setconfirmpassword(text)}/>
      <Text style={formbtn} onPress={() =>handlePassword() 
      }>Next</Text>
    </View>
  )
}
//navigation.navigate('Signup_account_created')
export default Signup_chosse_password

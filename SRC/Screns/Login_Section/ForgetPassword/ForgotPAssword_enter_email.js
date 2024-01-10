import React from 'react'
import { Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'
import { containerFull, goback, logo1 } from '../../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png'
import { formHead2, formInput, formbtn } from '../../../CommonCss/Formcss';

const ForgotPAssword_enter_email = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const handleEmail = () => {
    if (email === '') {
      alert('Please enter email')
    }

    else {
      setLoading(true)
      fetch('http://192.168.43.24:3000/verifyfp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
        .then(res => res.json()).then(data => {
          if (data.error === "Invalid Credentials") {
            // alert('Invalid Credentials')
            alert('Invalid Credentials')
            setLoading(false)
          }
          else if (data.message === "Verification Code Sent to your Email") {
            setLoading(false)
            alert(data.message);

            navigation.navigate('ForgotPAssword_enter_verification_code', {
              useremail: data.email,
              userVerificationCode: data.VerificationCode
            })

          }
        })
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
      <Text style={formHead2}>Verify Your Email</Text>
      <TextInput placeholder="Enter Your Email" style={formInput}
        onChangeText={(text) => setEmail(text)}
      />
      {
        loading ? <ActivityIndicator size="large" color="white" /> :
          <Text style={formbtn}
            onPress={() => handleEmail()}
          >
            Next
          </Text>
      }
    </View>
  )
}

export default ForgotPAssword_enter_email

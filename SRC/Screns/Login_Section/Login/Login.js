import React from 'react'
import { Text, View, Image, TextInput, ActivityIndicator } from 'react-native'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80, logo1 } from '../../../CommonCss/Pagecss'
import { formHead, formInput, formTextLinkCenter, formTextLinkRight, formbtn } from '../../../CommonCss/Formcss'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleLogin = () => {
    if (email == '' || password == '') {
      alert('Please enter email and password')
    }
    else {
      setLoading(true)
      fetch('http://192.168.43.24:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then(res => res.json())
        .then(async data => {
          if (data.error) { 
            setLoading(false)
            alert('oks1'+data.error)
          }
          else if (data.message == 'Successfully Signed In') {
            setLoading(false)
            await AsyncStorage.setItem('user', JSON.stringify(data))
            navigation.navigate('Mainpage', { data })
          }
        })
        .catch(err => {
          setLoading(false)
          alert('oks2'+err)
        })
    }
    // navigation.navigate('MainPage')
  }
  return (
    <View style={containerFull}>
      <Image source={logo} style={logo1} />
      <Text style={formHead}>Login</Text>
      <TextInput placeholder="Enter Your Email" style={formInput}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput placeholder="Enter Your Password" style={formInput}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={formTextLinkRight} onPress={() => navigation.navigate('ForgotPAssword_enter_email')
      }>Forget Password</Text>

      {
        loading ?
          <ActivityIndicator size="large" color="white" />
          :
          <Text style={formbtn} onPress={
            () => handleLogin()
          }>
            Submit
          </Text>
      }

      <View style={hr80}></View>
      <Text style={formTextLinkCenter} >Don't have an account? <Text style={{ color: 'white' }} onPress={() => navigation.navigate('Signup')}>Signup</Text></Text>

    </View>
  )
}

export default Login

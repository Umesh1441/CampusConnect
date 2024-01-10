import React, { useState } from 'react'
import { Text, TouchableOpacity, View,Image,TextInput} from 'react-native'
import { containerFull, goback, logo1 } from '../../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png' 
import { formHead2, formHead3, formInput, formbtn } from '../../../CommonCss/Formcss';

const Signup_verification = ({navigation,route}) => {
      const{useremail,userVerificationCode}=route.params;
      const[verificationCode,setVerificationCode]=useState('');

      const handleverificationCode=()=>{
        if(verificationCode!=userVerificationCode){
          alert('Invalid Verification code');
        }
        else if(verificationCode==userVerificationCode){
          alert('Verfication Code Matched');
          navigation.navigate('Signup_username',{
            email:useremail
          })
        }
        else{
          alert('Please try again');
        }
      }


      // console.log(userVerificationCode);
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback} >
      <Ionicons name="arrow-back" size={24} color="gray"  />
        <Text style={{
        color: 'gray',
        fontSize: 17,
        marginLeft:5,
        fontWeight:'bold'
      }}>
          Go back</Text>
      </TouchableOpacity>
      <Image source={logo} style={logo1}/>
      <Text style={formHead3}>A verification code has been sent to your email address</Text>
      <TextInput placeholder='Enter 6 digit code' style={formInput}
        onChangeText={(text)=>{setVerificationCode(text)}}
      />
      <Text style={formbtn} onPress={()=>handleverificationCode()}
    >Next</Text>
    </View>
  )
}
//onPress={()=>navigation.navigate('Signup_username')
export default Signup_verification

import React from 'react'
import { Text, TouchableOpacity, View,Image,TextInput} from 'react-native'
import { containerFull, goback, logo1 } from '../../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png' 
import { formHead2, formHead3, formInput, formbtn } from '../../../CommonCss/Formcss';

const ForgotPAssword_enter_verification_code = ({navigation,route}) => {
  const { useremail, userVerificationCode } = route.params;
  console.log(useremail, userVerificationCode)

  const [verificationCode, setVerificationCode] = React.useState('');


  const handleVerificationCode = () => {

      if (verificationCode != userVerificationCode) {
          alert('Invalid Verification Code')
      }
      else {
          alert('Verification Code Matched')
          navigation.navigate('ForgotPAssword_chossePassword', { email: useremail })
      }

      // navigation.navigate('ForgotPassword_ChoosePassword')
  }
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
      <Image source={logo} style={logo1} />
            <Text style={formHead3}>A verification code has been sent to your email</Text>

            <TextInput placeholder="Enter 6-Digit Code here" style={formInput}
                onChangeText={(text) => setVerificationCode(text)}
            />

            <Text style={formbtn}
                onPress={() => handleVerificationCode()}
            >
                Next</Text>
    </View>
  )
}

export default ForgotPAssword_enter_verification_code

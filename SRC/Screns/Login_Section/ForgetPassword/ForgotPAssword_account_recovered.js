import React from 'react'
import { Text, TouchableOpacity, View,Image,TextInput} from 'react-native'
import { containerFull, goback, logo1, row } from '../../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png' 
import { formHead2, formHead3, formInput, formbtn } from '../../../CommonCss/Formcss';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ForgotPAssword_account_recovered = ({navigation}) => {
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
    <View style={row}>
    <MaterialCommunityIcons name="check-decagram" size={35} color="#99883C" />
    <Text style={formHead2}>Account Recovered succesfully</Text>
    </View>
    <Text style={formbtn} onPress={()=>navigation.navigate('Login')
  }>Let's Roll</Text>
  </View>
  )
}

export default ForgotPAssword_account_recovered

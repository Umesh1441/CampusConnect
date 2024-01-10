import React, { useState } from 'react'
import { Text, TouchableOpacity, View,Image,TextInput, ActivityIndicator} from 'react-native'
import { containerFull, goback, logo1 } from '../../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/logo.png' 
import { formHead2, formHead3, formInput, formbtn } from '../../../CommonCss/Formcss';

const Signup_username = ({navigation,route}) => {
  const{email}=route.params;
  const[username,setUsername]=useState('');
  const[loading,setLoading]=useState(false);

  const handleusername=()=>{
      if(username==""){
        alert('Please enter username ');
      }
      else {
        setLoading(true);
        fetch('http://192.168.43.24:3000/changeusername',{
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            email:email,
            username:username
          })
        }).then(res=>res.json()).then(
          data=>{
            if(data.message==="Username Available"){
              setLoading(false);
              alert('Username had been set succesfully')
              navigation.navigate('Signup_chosse_password',
              {
                email:email,username:username
              })
            }
            else{
              setLoading(false)
              alert("Username not available");
            }
          }
        ).catch(err=>{
          console.log(err);
        })
      }
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
    <Image source={logo} style={logo1}/>
    <Text style={formHead3}>Choose a Username</Text>
    <TextInput placeholder='Enter a Username' style={formInput} onChangeText={(text)=>setUsername(text)}/>
  {
    loading ?
    <ActivityIndicator size={'large'} color='white'/>
    :
    <Text style={formbtn} onPress={()=>handleusername()}
  >Next</Text>
  }
  </View>
  )
}
//onPress={()=>navigation.navigate('Signup_chosse_password')
export default Signup_username

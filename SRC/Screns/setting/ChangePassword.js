import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator } from 'react-native'
import { containerFull, goback, logo1 } from '../../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../assets/logo.png'
import { formHead2, formInput, formTextLinkRight, formbtn } from '../../CommonCss/Formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({navigation}) => {
    const [oldpassword, setOldpassword] = useState('')
    const [newpassword, setNewpassword] = useState('')
    const [confirmnewpassword, setConfirmNewpassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handlePasswordChange = () => {
        if (oldpassword === '' || newpassword === '' || confirmnewpassword === '') {
            alert('Please fill all the fields')
        } else if (newpassword !== confirmnewpassword) {
            alert('New password and confirm new password must be same')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user')

                .then(data => {
                    fetch('http://192.168.43.24:3000/changepassword', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": 'Bearer ' + JSON.parse(data).token
                        },
                        body: JSON.stringify({ email: JSON.parse(data).user.email, oldpassword: oldpassword, newpassword: newpassword })
                    })
                        .then(res => res.json()).then(data => {
                            if (data.message == 'Password Changed Successfully') {
                                setLoading(false)
                                alert('Password Changed Successfully')
                                AsyncStorage.removeItem('user')
                                navigation.navigate('Login')
                            }
                            else {
                                alert('Wrong Password')
                                setLoading(false)
                            }
                        }
                        )
                })
        }
    }
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings1')} style={goback} >
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
            <Text style={formHead2}>Choose a strong password</Text>
            <TextInput placeholder="Enter old password" style={formInput} secureTextEntry
                onChangeText={(text) => setOldpassword(text)}
            />
            <TextInput placeholder="Enter New password" style={formInput} secureTextEntry
                onChangeText={(text) => setNewpassword(text)}
            />
            <TextInput placeholder="Confirm New password" style={formInput} secureTextEntry
                onChangeText={(text) => setConfirmNewpassword(text)}
            />
            {
                loading ? <ActivityIndicator size="large" color="white" /> :
                    <Text style={formbtn}
                        onPress={() => handlePasswordChange()}
                    >
                        Next
                    </Text>
            }
            <Text style={formTextLinkRight} onPress={() => navigation.navigate('ForgotPAssword_enter_email')
            }>Forget Password</Text>
        </View>
    )
}

export default ChangePassword



//ChangePassword
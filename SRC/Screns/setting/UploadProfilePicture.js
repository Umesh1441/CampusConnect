import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1 } from '../../CommonCss/Pagecss'
import logo from '../../../assets/logo.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../CommonCss/Formcss'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '../../firebase/config';
import *as ImagePicker from 'expo-image-picker';

const ChangeUsername = ({ navigation }) => {

    const [image, setImage] = useState('')

    const [loading, setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        console.log(result);
        if (!result.canceled) {
            const selectedAssets = result.assets;
            const firstSelectedAsset = selectedAssets[0];
            const uri = firstSelectedAsset.uri;
            setImage({ uri });
            const response = await fetch(uri);
            const blob = await response.blob();
            const filename = uri.substring(uri.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            console.log('Selected image URI:', uri);
            console.log('Firebase Storage URL:', url);

            // Return the download URL
            return url;
        }
        else {
            return null;
        }
    }//data
    const handleupload = () => {
        AsyncStorage.getItem('user').then(data => {
            setLoading(true)
            pickImage().then(url => {
                fetch('http://192.168.43.24:3000/setprofilepic', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: JSON.parse(data).user.email,
                        profilepic: url
                    })
                })
                    .then(res => res.json()).then(data => {
                        if (data.message === "Profile picture updated succesfully") {
                            setLoading(false)
                            alert('Profile picture updated successfully');
                            navigation.navigate('Settings1');
                        }
                        else if (data.error === "Invalid Credentials") {
                            alert('Invalid Creditional')
                            setLoading(false)
                            navigation.navigate('Login')
                        }
                        else {
                            setLoading(false)
                            alert('Please Try again');
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            })
        })
    }

    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={logo} style={logo1} />
            <Text style={formHead2}>Upload Profile</Text>


            {
                loading ? <ActivityIndicator color='white' size={'large'} /> :
                    <Text style={formbtn}
                        onPress={() => handleupload()}
                    >
                        Upload
                    </Text>
            }
        </View>
    )
}




export default ChangeUsername

const styles = StyleSheet.create({})
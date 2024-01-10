import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, hr80, logo1 } from '../../CommonCss/Pagecss'
import logo from '../../../assets/logo.png'
import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../CommonCss/Formcss'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import *as ImagePicker from 'expo-image-picker';
import { firebase } from '../../firebase/config';
const AddPost = ({ navigation }) => {

    const [postdescription, setpostdescription] = useState('')

    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [post, setPost] = useState('')

    const pickImage = async () => {
        setLoading1(true)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        // console.log(result)


        if (!result.canceled) {
            const selectedAssets = result.assets;
            const firstSelectedAsset = selectedAssets[0];
            const uri = firstSelectedAsset.uri;
            // setImage({ uri });
            const response = await fetch(uri);
            const blob = await response.blob();
            const filename = uri.substring(uri.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            console.log('Selected image URI:', uri);
            console.log('Firebase Storage URL:', url);
            setLoading1(false)
            setPost(url)
            // console.log(url)
        }
        else {
            setLoading1(false)
            setPost(null)
        }
    }
//imagePicker
    const handleUpload = () => {

        if (post != null) {
            AsyncStorage.getItem('user')
                .then(data => {
                    setLoading2(true)

                    fetch('http://192.168.43.24:3000/addpost', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            post: post,
                            postdescription: postdescription
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message == 'Post added successfully') {
                                alert('Post added successfully')
                                setLoading2(false)
                                navigation.navigate('My_User_Profile')
                            }
                            else {
                                alert('Something went wrong, please try again')
                                setLoading2(false)
                            }
                        })
                })
        }
        else {
            alert('Please select an image')
        }
    }

    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings_1')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            {/* <Image source={logo} style={logo1} /> */}
            {
                loading1 ? <ActivityIndicator
                    size="large"
                    color="white"
                /> :
                    <>
                        <Text
                            style={formHead2}
                        >Add New Post</Text>

                        {
                            post ?
                                <TouchableOpacity
                                    onPress={() => pickImage()}
                                >
                                    <Image source={{ uri: post }} style={{
                                        width: 200, height: 200,
                                        marginVertical: 10,
                                    }} />
                                </TouchableOpacity>
                                :

                                <Text style={styles.addpost}
                                    onPress={() => {
                                        pickImage()
                                    }}
                                >
                                    Click here to select a new post
                                </Text>
                        }
                    </>
            }



            {/*  */}
            <Text style={formHead2}>Change Description</Text>
            <TextInput placeholder="Enter new description" style={formInput}
                onChangeText={(text) => setpostdescription(text)}
                multiline={true}
                numberOfLines={5}
            />

            {
                loading2 ? <ActivityIndicator
                    size="large"
                    color="white"
                /> :
                    <Text style={formbtn}
                        onPress={() => handleUpload()}
                    >
                        Upload
                    </Text>
            }
        </View>
    )
}






export default AddPost

const styles = StyleSheet.create({
    addpost: {
        fontSize: 20,
        fontWeight: '100',
        color: 'white',

        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 50,
        width: '80%',
        textAlign: 'center',
        marginVertical: 20,
    }
})
import React from 'react'
import { Text, View, Image, StatusBar, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { containerFull } from '../../CommonCss/Pagecss'
import { formHead } from '../../CommonCss/Formcss'
import BottomNavbar from '../../Component/BottomNavbar'
import TopNavbar from '../../Component/TopNavbar'
import FollowersRandomPost from '../../Component/FollowersRandomPost'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import nopic from '../../../assets/nopic.png';

const My_User_Profile = ({ navigation }) => {
    //http://192.168.43.24:3000/otheruserdata
    const [userdata, setUserdata] = React.useState(null)

    const loaddata = async () => {
        AsyncStorage.getItem('user')
            .then(async (value) => {
                fetch('http://192.168.43.24:3000/userdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + JSON.parse(value).token
                    },
                    body: JSON.stringify({ email: JSON.parse(value).user.email })
                })
                    .then(res => res.json()).then(data => {
                        if (data.message == 'User Found') {
                            setUserdata(data.user)
                        }
                        else {
                            alert('Login Again')
                            navigation.navigate('Login')
                        }
                    })
                    .catch(err => {
                        navigation.navigate('Login')
                    })
            })
            .catch(err => {
                navigation.navigate('Login')
            })
    }
    useEffect(() => {
        loaddata()
    }, [])

    console.log(userdata);
    // const data = {
    //     username: 'mr_umesh_1234',
    //     followers: 3333,
    //     following: 3454,
    //     decription: "I am a Sofware Devloper and love to Code I am a Sofware Devloper and love to Code",
    //     profile_image: "https://picsum.photos/500/500",
    //     post: [
    //         {
    //             id: 1,
    //             post_image: 'https://picsum.photos/400/400',
    //         },
    //         {
    //             id: 2,
    //             post_image: 'https://picsum.photos/350/500',
    //         },
    //         {
    //             id: 3,
    //             post_image: 'https://picsum.photos/250/250',
    //         },
    //         {
    //             id: 4,
    //             post_image: 'https://picsum.photos/540/510',
    //         },
    //         {
    //             id: 5,
    //             post_image: 'https://picsum.photos/410/510',
    //         },
    //     ]
    // }
    return (
        <View style={styles.container}>
            <StatusBar />
            <TopNavbar navigation={navigation} page={"My_User_Profile"} />
            <BottomNavbar navigation={navigation} page={"My_User_Profile"} />
            {/* <Foundation name="refresh" size={30} color="white" style={styles.refresh} */}
            {/* onPress={() => loaddata()}
            /> */}
                
            {
                userdata ?
                    <ScrollView>
                        <View style={styles.c1}>
                            {
                                userdata.profilepic.length > 0 ?
                                    <Image style={styles.profilepic} source={{ uri: userdata.profilepic }} />
                                    :
                                <Image style={styles.profilepic} source={nopic} />
                            }
                            <Text style={styles.txt}>@{userdata.username}</Text>
                            {/* {console.log("hello "+userdata.posts[0].post)}  */}
                            <View style={styles.c11}>
                                <View style={styles.c111}>
                                    <Text style={styles.txt1}>Followers</Text>
                                    <Text style={styles.txt2}>{userdata.followers.length}</Text>
                                </View>
                                <View style={styles.vr1}></View>
                                <View style={styles.c111}>
                                    <Text style={styles.txt1}>Following</Text>
                                    <Text style={styles.txt2}>{userdata.following.length}</Text>
                                </View>
                                <View style={styles.vr1}></View>
                                <View style={styles.c111}>
                                    <Text style={styles.txt1}>Posts</Text>
                                    <Text style={styles.txt2}>{userdata.posts.length}</Text>
                                </View>
                            </View>

                            {
                                userdata.description.length > 0 &&
                                <Text style={styles.description}>{userdata.description}</Text>
                            }


                        </View>
                        {
                            userdata.posts.length > 0 ?
                                <View style={styles.c1}>
                                    <Text style={styles.txt}>Your post</Text>
                                    <View style={styles.c13}>
                                        {
                                            userdata.posts?.map(
                                                (item) => {
                                                    if(item.post!=""){
                                                    return (
                                                        <Image key={item.post} style={styles.postpic}
                                                            source={{ uri: item.post }}
                                                        />   
                                                    )}
                                                }
                                            )
                                        }
                                    </View>
                                </View>
                                :
                            <View style={styles.c2}>
                                <Text style={styles.txt1}>You have not posted anything yet</Text>
                            </View>
                        }

                    </ScrollView>

                    :
                    <ActivityIndicator size="large" color="white" />
            }

        </View>
    )
}

export default My_User_Profile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
    },
    c1: {
        width: '100%',
        alignItems: 'center',
    },
    profilepic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 10
    },
    txt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        backgroundColor: '#111111',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    txt1: {
        color: 'white',
        fontSize: 15,
    },
    txt2: {
        color: 'white',
        fontSize: 20,
    },
    c11: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    c111: {
        alignItems: 'center',
    },
    vr1: {
        width: 1,
        height: 50,
        backgroundColor: 'white'
    },
    description: {
        color: 'white',
        fontSize: 15,
        marginVertical: 10,
        backgroundColor: '#111111',
        width: '100%',
        padding: 10,
        paddingVertical: 20,
    },
    postpic: {
        width: '30%',
        height: 120,
        margin: 5
    },
    c13: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        justifyContent: 'center'
    },
    c2: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    refresh: {
        position: 'absolute',
        top: 50,
        right: 5,
        zIndex: 1,
    }
})


import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import nopic from '../../assets/nopic.png'
// import { TouchableOpacity } from 'react-native-web'
const ChatsCards = ({ chat, navigation }) => {

    const [chats, setChats] = useState(null);
    useEffect(() => {
        loadchats()
    }, [])
    const loadchats = () => {

        fetch('http://192.168.43.24:3000/getusermessagesUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: chat
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChats(data)
            })
            .catch(err => {
                alert('Something went wrong at meaage 2')
                setChats([])
            })
    }
    // console.log(chats.profil/
    return (

        <View style={styles.ChatCard} >
            {
                chats?.profilepic ?
                    <Image source={{ uri: chats?.profilepic }} style={styles.image} />
                    :
                    <Image source={nopic} style={styles.image} />
            }
            <View style={styles.c1}>
                <Text style={styles.username}
                 onPress={
                    
                        ()=>{
                            navigation.navigate('MessagePage',{
                                 fuseremail : chats.email,
                                fuserid : chats._id,
                            })
                        }
                    
                }
                >{chats?.username}</Text>
                <Text style={styles.lastmessage}>noting</Text>
            </View>
        </View>




    )
}

export default ChatsCards

const styles = StyleSheet.create({
    ChatCard: {
        backgroundColor: '#111111',
        width: '100%',
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    username: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    c1: {
        marginLeft: 20,
    },
    lastmessage: {
        color: 'gray',
        fontSize: 19,
    }
})

// console.log("currChats::"+chat.fuserid)
// let [chats, setchats] = React.useState(null);
// useEffect(() => {
//     fetch('http://192.168.43.24:3000/getuserbyid', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             userid: chat.fuserid
//         })
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log("what:"+data)
//             setchats(data)
//         })
//         .catch(err => {
//             alert('Something went wrong')
//             setchats(null)
//         })
// }, [])
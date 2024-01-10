import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons1 } from '../CommonCss/Pagecss';
import FinalPost from './FinalPost'

const Post_big_cart = ({ posts, profile_image, username, }) => {

    // const [isliked, setIsliked] = useState(false)
    // const [showcomments, setShowcomments] = useState(false)
    // console.log(profile_image, username);
    // console.log(":"+posts);
    return (
        <View style={styles.container}>
            
            {
                posts.map((item) => {
                    return (
                        <FinalPost
                            key={item.id}
                            username={username}
                            profile_image={profile_image}
                            post_img={item.post}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })
            }
        </View>
    )
}

export default Post_big_cart

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'bkack',
        width: '100%',
        // height: 350,
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
        // borderTopColor: 'gray',
        borderLeftColor: 'black',
        borderBottomColor: 'gray',
        borderWidth: 1,
    },
    c1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
    },
    profilepic: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    },
    username: {
        color: 'white',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    s2: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
    },
    s21: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    notliked: {
        color: 'grey',
        marginLeft: 5,
        fontSize: 25,
    },
    liked: {
        color: '#DC143C',
        marginLeft: 5,
        fontSize: 25,
    },
    iconliked: {
        color: '#DC143C',
        fontSize: 30,
    },
    s22: {
        marginLeft: 20,
    },
    s3: {
        width: '100%',
        backgroundColor: '#111111',
        padding: 10,
    },
    commentuser: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,

    },
    commenttext: {
        color: 'grey',
        fontSize: 17,
        marginLeft: 5,
    },
    s31: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    }

})























 {/* <View style={styles.c1}>
                <Image source={{ uri: profile_image }} style={styles.profilepic} />
                <Text style={styles.username}>{username}</Text>
            </View>
            {
                posts.map((item) => {
                    // console.log(item.post);
                    <Image source={{ uri: post_pic }} style={styles.image} />
                })
            }
            <View style={styles.s2}>
                {
                    isliked ?
                        <View style={styles.s21}>
                            <AntDesign name="heart" size={24} color="black" style={styles.iconliked} onPress={() => {
                                setIsliked(false)
                            }} />
                            <Text style={styles.liked}>{likes.length + 1}</Text>
                        </View>
                        :

                        <View style={styles.s21}>
                            <AntDesign name="hearto" size={24} color="black" style={icons1} onPress={() => {
                                setIsliked(true)
                            }} />
                            {/* <Text style={styles.notliked}>{likes.length}</Text> */}
                    //         </View>
                    //     }
        
        
                    //     <View style={styles.s22}>
                    //         <FontAwesome name="comment" size={24} color="black" style={icons1} onPress={
                    //             () => {
                    //                 setShowcomments(!showcomments)
                    //             }
                    //         } />
                    //     </View>
                    // </View>
        
        
                    // {
                    //     showcomments == true &&
                    //     <View style={styles.s3}>
                    //         {
                    //             comments.map((item, index) => {
                    //                 return (
                    //                     <View style={styles.s31} key={item.id}>
                    //                         <Text style={styles.commentuser}>{item.username}</Text>
                    //                         <Text style={styles.commenttext}>{item.comment}</Text>
                    //                     </View>
                    //                 )
                    //             })
                    //         }
                    //     </View>
                    // }
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons1 } from '../CommonCss/Pagecss';
// import { FontAwesome } from '@expo/vector-icons';

const BottomNavbar = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Ionicons name="home" size={24} color="black" style={icons1} onPress={()=>navigation.navigate('Mainpage')}/>
            <AntDesign name="search1" size={24} color="black" style={icons1} onPress={()=>navigation.navigate('SearchUserPage')}/>
            <FontAwesome name="heart" size={24} color="black" style={icons1} onPress={()=>navigation.navigate('Notification')}  page={"My_User_Profile"}/>
            <FontAwesome name="user" size={24} color="black" style={icons1} onPress={()=>navigation.navigate('My_User_Profile')}  page={"My_User_Profile"}/>
        </View>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor: '#111111',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        borderTopWidth:1,
        paddingVertical:10,
    }
})
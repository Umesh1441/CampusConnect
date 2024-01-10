import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import logo from '../../assets/logo_2.png'
import { icons1, logo1, logo2, logo4 } from '../CommonCss/Pagecss'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const TopNavbar = ({navigation,page}) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="add-a-photo" size={24} color="gray" style={logo2} onPress={()=>navigation.navigate('AddPost')}/>
            <Image source={logo} style={logo2}/>
            {
                page==='Mainpage' &&
                <Ionicons name="chatbubble-ellipses" size={24} color="gray" style={icons1} onPress={()=>navigation.navigate('All_Chats')} />
            }
            {
                page==='My_User_Profile' &&
                <Ionicons name="settings-sharp" size={20} color="black" style={icons1} onPress={()=>navigation.navigate('Settings1')} />
            }
           
        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    container: {
        // display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 100,
        padding:10,
        // paddingRight:20,
        backgroundColor:'#111111'
    }
})
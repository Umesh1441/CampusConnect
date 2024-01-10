import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'
import { containerFull } from '../../CommonCss/Pagecss'
import { formHead } from '../../CommonCss/Formcss'
import BottomNavbar from '../../Component/BottomNavbar'
import TopNavbar from '../../Component/TopNavbar'
import FollowersRandomPost from '../../Component/FollowersRandomPost'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { AsyncStorage } from 'react-native'


const Mainpage = ({ navigation, page }) => {
  const [userdata, setUserdata] = React.useState(null)
  useEffect(() => {
    AsyncStorage.getItem('user').then(data => {
      // console.log('async userdata', data)
    }).catch(err => alert(err))
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={"Mainpage"} />
      <BottomNavbar navigation={navigation} page={"Mainpage"} />
      <FollowersRandomPost />
    </View>
  )
}

export default Mainpage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  }
})
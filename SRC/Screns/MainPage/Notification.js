import React from 'react'
import { Text, View,StatusBar ,StyleSheet} from 'react-native'
import { containerFull } from '../../CommonCss/Pagecss'
import { formHead, formHead2 } from '../../CommonCss/Formcss'
import BottomNavbar from '../../Component/BottomNavbar'
import TopNavbar from '../../Component/TopNavbar'
import FollowersRandomPost from '../../Component/FollowersRandomPost'

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <TopNavbar navigation={navigation} page={"Mainpage"}/>
      <BottomNavbar navigation={navigation} page={"Mainpage"}/>
      <Text style={formHead}>Notification</Text>
       </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height:'100%',
      backgroundColor:'black',
      paddingVertical:50,
  }
})
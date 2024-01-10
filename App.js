import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from './SRC/Screns/Login_Section/Login/Login';
import ForgotPAssword_enter_email from './SRC/Screns/Login_Section/ForgetPassword/ForgotPAssword_enter_email';
import Mainpage from './SRC/Screns/MainPage/Mainpage';
import Signup_verification from './SRC/Screns/Login_Section/Signup/Signup_verification';
import Signup_username from './SRC/Screns/Login_Section/Signup/Signup_username';
import Signup_chosse_password from './SRC/Screns/Login_Section/Signup/Signup_chosse_password';
// import Signup_account_created from './SRC/Screns/Login_Section/Signup/Signup_account_created';
import ForgotPAssword_chossePassword from './SRC/Screns/Login_Section/ForgetPassword/ForgotPAssword_chossePassword';
import ForgotPAssword_account_recovered from './SRC/Screns/Login_Section/ForgetPassword/ForgotPAssword_account_recovered';
import ForgotPAssword_enter_verification_code from './SRC/Screns/Login_Section/ForgetPassword/ForgotPAssword_enter_verification_code';
import Signup from './SRC/Screns/Login_Section/Signup/Signup';
import All_Chats from './SRC/Screns/ChatSection/All_Chats';
import My_User_Profile from './SRC/Screns/ProfileSection/My_User_Profile';
import Settings1 from './SRC/Screns/setting/Settings1';
import Notification from './SRC/Screns/MainPage/Notification';
import ChangePassword from './SRC/Screns/setting/ChangePassword';
import EditProfile from './SRC/Screns/setting/EditProfile';
import UploadProfilePicture from './SRC/Screns/setting/UploadProfilePicture';
import ChangeUsername from './SRC/Screns/setting/ChangeUsername';
import ChangeDescription from './SRC/Screns/setting/ChangeDescription';
import AddPost from './SRC/Screns/MainPage/AddPost';
import SearchUserPage from './SRC/Screns/MainPage/SearchUserPage';
import Other_UserProfile from './SRC/Screns/ProfileSection/Other_UserProfile';
import MessagePage from './SRC/Screns/ChatSection/MessagePage';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
        animation:'slide_from_right'
      }}>

        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MessagePage" component={MessagePage} />
        <Stack.Screen name="Other_UserProfile" component={Other_UserProfile} />
        <Stack.Screen name="SearchUserPage" component={SearchUserPage} />
        <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="UploadProfilePicture" component={UploadProfilePicture} />
        <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
        <Stack.Screen name="ChangeDescription" component={ChangeDescription} />
        <Stack.Screen name="My_User_Profile" component={My_User_Profile} />
        <Stack.Screen name="Settings1" component={Settings1} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="All_Chats" component={All_Chats} options={{animation:'fade_from_bottom'}} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signup_chosse_password" component={Signup_chosse_password} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ForgotPAssword_chossePassword" component={ForgotPAssword_chossePassword} />
        <Stack.Screen name="ForgotPAssword_account_recovered" component={ForgotPAssword_account_recovered} />
        <Stack.Screen name="ForgotPAssword_enter_verification_code" component={ForgotPAssword_enter_verification_code} />
        <Stack.Screen name="Signup_username" component={Signup_username} />
        <Stack.Screen name="Signup_verification" component={Signup_verification} />
        <Stack.Screen name="ForgotPAssword_enter_email" component={ForgotPAssword_enter_email} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

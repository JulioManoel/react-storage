import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScree from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeTabs from "./HomeTabs";
// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/config";
// import { Alert } from "react-native";

const Stack = createNativeStackNavigator()

export default AppNavigation = () => {
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     Alert.alert('user', user)
  //     setUser(user)
  //   })
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LoginScreen'  /*user ?  'HomeTabs' : 'LoginScree'*/}>
        <Stack.Screen name="Login" component={LoginScree} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
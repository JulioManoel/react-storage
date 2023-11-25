import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LoginScree from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeTabs from "./HomeTabs";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { store } from "../store";

const Stack = createNativeStackNavigator()

export default AppNavigation = () => {
  const navigation = useNavigation()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(!user) return
      
      store.user.currentUser = user
      navigation.navigate('HomeTabs')
    })
  }, [])

  return (
    <Stack.Navigator initialRouteName={'LoginScree'}>
      <Stack.Screen name="Login" component={LoginScree} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
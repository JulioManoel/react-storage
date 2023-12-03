import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import LoginScree from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import LoadingScreen from '../screens/auth/LoadingScreen'
import HomeTabs from './HomeTabs'
import { useEffect } from 'react'
import { store } from '../store'


const Stack = createNativeStackNavigator()

export default AppNavigation = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const checkAuthState = async () => {
      await store.user.autoLogin()
      if(store.user.currentUser) navigation.navigate('Loading')
    }

    checkAuthState()
  }, [])

  return (
    <Stack.Navigator initialRouteName={'LoginScree'}>
      <Stack.Screen name="Login" component={LoginScree} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
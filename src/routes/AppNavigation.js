import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScree from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeTabs from "./HomeTabs";

const Stack = createNativeStackNavigator()

export default AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScree">
        <Stack.Screen name="Login" component={LoginScree} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
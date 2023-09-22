import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator()

export default HomeTabs = () => {
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { 
        backgroundColor: '#121212', 
        borderTopColor: 'transparent', 
        // paddingBottom: 5, 
        // paddingTop: 5
      },          
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
}
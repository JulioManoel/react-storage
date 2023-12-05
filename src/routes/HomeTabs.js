import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/FontAwesome'
import ButtonNew from '../components/atoms/ButtonNew'

import HomeScreen from '../screens/HomeScreen'
import ManageStack from './ManageStack'
import SaleStack from '../routes/SaleStack'
import SettingScreen from '../screens/SettingScreen'

const Tab = createBottomTabNavigator()

export default HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent',
          paddingBottom: 5,
          paddingTop: 5
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (<Icon name="home" color={color} size={size} />)
        }}
      />

      <Tab.Screen
        name="Sell"
        component={SaleStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => <ButtonNew size={size} focused={focused} />,
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="ManageStack"
        component={ManageStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (<Icon name="pencil-square-o" color={color} size={size} />),
          tabBarLabel: 'Manage',
        }}
      />

      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarButton: () => null
        }}
      />
    </Tab.Navigator>
  )
}
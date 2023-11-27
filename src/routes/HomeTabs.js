import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/FontAwesome'
import ButtonNew from '../components/atoms/ButtonNew'

import HomeScreen from '../screens/HomeScreen'
import ManagerScreen from '../screens/ManagerScreen'
import SettingScreen from '../screens/SettingScreen'
import ManageStack from './ManageStack'

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
        name="ManageStack"
        component={ManageStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (<Icon name="pencil-square-o" color={color} size={size} />),
          tabBarLabel: 'Manage',
        }}
      />

      <Tab.Screen
        name="Sell"
        component={ManagerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => <ButtonNew size={size} focused={focused} />,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Users"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (<Icon name="gear" color={color} size={size} />)
        }}
      />
    </Tab.Navigator>
  )
}
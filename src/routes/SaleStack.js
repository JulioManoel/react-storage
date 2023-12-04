import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryItemsList from '../screens/CategoryItemsList'
import SaleScreen from '../screens/SaleScreen'
import Checkout from '../screens/Checkout'

const Stack = createNativeStackNavigator()

export default SaleStack = () => {
  return (
    <Stack.Navigator initialRouteName={'SaleScreen'}>
      <Stack.Screen name="CategoryItemsList" component={CategoryItemsList} options={{ headerShown: false }} />
      <Stack.Screen name="SaleScreen" component={SaleScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
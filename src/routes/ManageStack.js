import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ManagerScreen from '../screens/manager/ManagerScreen'
import ManagerCategoryScreen from '../screens/manager/ManagerCategoryScreen'
import ManagerProductScreen from '../screens/manager/ManagerProductScreen'
import CategoryScreen from '../screens/manager/CategoryScreen'
import ProductScreen from '../screens/manager/ProductScreen'

const Stack = createNativeStackNavigator()

export default ManageStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Manage'}>
      <Stack.Screen name="Manage" component={ManagerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ManagerCategory" component={ManagerCategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ManagerProduct" component={ManagerProductScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManagerScreen from "../screens/ManagerScreen";
import ManagerCategoryScreen from "../screens/ManagerCategoryScreen";
import CategoryScreen from "../screens/CategoryScreen";

const Stack = createNativeStackNavigator()

export default ManageStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Manage'}>
      <Stack.Screen name="Manage" component={ManagerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ManagerCategory" component={ManagerCategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Product" component={ManagerScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
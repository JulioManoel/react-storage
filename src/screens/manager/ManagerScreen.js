import { StyleSheet, View } from 'react-native'
import ManageCard from '../../components/atoms/ManageCard'
import { useNavigation } from '@react-navigation/native'
import Title from '../../components/atoms/Title'

export default ManagerScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Title title="Manage" />
      
      <View style={styles.cards}>
        <ManageCard text="Category" icon="grid" backgroundColor="#2E02DF" onPress={() => navigation.navigate('ManagerCategory')}/>
        <ManageCard text="Product" icon="shopping-cart" backgroundColor="#36B20A" onPress={() => navigation.navigate('ManagerProduct')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cards: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})
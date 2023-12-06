import { View } from 'react-native'
import CategoryGrid from '../components/molecules/CategoryGrid'
import Title from '../components/atoms/Title'
import { StyleSheet } from 'react-native'
import FloatButton from '../components/atoms/FloatButton'

export default SaleScreen = () => {
  return (
    <View style={styles.container}>
      <Title title="Categorias" />
      <CategoryGrid />
      
      <FloatButton icon="shopping-cart" backgroundColor="#00C193" onPress={() => navigation.navigate('Checkout')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
import { StyleSheet, View, Text } from 'react-native'
import ScreenHeader from '../components/molecules/ScreenHeader'
import CategoryGrid from '../components/molecules/CategoryGrid'

const currentScreen = 'Categorias'

export default SaleScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader currentScreen={currentScreen}/>
      <CategoryGrid/>
    </View>
  )
}

const styles = StyleSheet.create({

})
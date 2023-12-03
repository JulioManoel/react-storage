import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { store } from '../../store'

export default LoadingScreen = () => {
  const navigation = useNavigation()
  
  useEffect(() => {
    const get = async () => {
      await store.user.get()

      Promise.all([
        store.category.get(store.user.currentUser),
        store.product.get(store.user.currentUser)
      ])
      navigation.navigate('HomeTabs')
    }

    get()
  }, [])


  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0099FF" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
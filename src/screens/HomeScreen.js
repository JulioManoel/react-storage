import { StyleSheet, View } from 'react-native'
import UserHeader from '../components/molecules/UserHeader'
import { useEffect } from 'react'
import { store } from '../store'
import { useNavigation } from '@react-navigation/native'

export default HomeScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.addListener('focus', async () => {
      await store.user.get()
      console.log(store.user.currentUser)
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <UserHeader style={styles.userHeader} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  userHeader: {
    flex: 1,
  },

  apprenticeList: {
    flex: 2,
  },
})
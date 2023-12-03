import { StyleSheet, View } from 'react-native'
import UserHeader from '../components/molecules/UserHeader'

export default HomeScreen = () => {
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
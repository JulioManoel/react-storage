import { StyleSheet, View, ScrollView } from 'react-native'
import UserHeader from '../components/molecules/UserHeader'
import PopularProducts from '../components/molecules/PopularProducts'
import Transactions from '../components/molecules/Transactions'

export default HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <UserHeader style={styles.userHeader} />
      <PopularProducts/>
      <Transactions/>
    </ScrollView>
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
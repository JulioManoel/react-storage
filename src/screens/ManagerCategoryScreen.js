import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import Title from '../components/atoms/Title'
import Search from '../components/atoms/Search'
import ListItem from '../components/atoms/ListItem'
import ItemTab from '../components/atoms/ItemTab'
import { useCallback, useEffect, useState } from 'react'
import FloatButton from '../components/atoms/FloatButton'
import { useNavigation } from '@react-navigation/native'
import { store } from '../store'

export default ManagerCategoryScreen = () => {
  const navigation = useNavigation()
  const renderItem = useCallback(({ item }) => <ListItem item={item} />)

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigation.addListener('focus', async () => {
      setLoading(true)
      await store.category.get(store.user.currentUser)
      setList(store.category.categories)
      setLoading(false)
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Title title="Manage Category" />

      <Search setList={setList} data={store.category.categories} />

      {loading ? (
        <ActivityIndicator size="large" color="primary" />
      ) : (
        <FlatList
          ItemSeparatorComponent={ItemTab}
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderItem}
        />
      )}


      <FloatButton icon="plus" backgroundColor="#00C193" onPress={() => navigation.navigate('Category', { isCreate: true })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
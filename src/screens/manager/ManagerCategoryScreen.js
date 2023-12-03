import { ActivityIndicator, Alert, FlatList, StyleSheet, View } from 'react-native'
import Title from '../../components/atoms/Title'
import Search from '../../components/atoms/Search'
import ListItem from '../../components/molecules/ListItem'
import ItemTab from '../../components/atoms/ItemTab'
import { useCallback, useEffect, useState } from 'react'
import FloatButton from '../../components/atoms/FloatButton'
import { useNavigation } from '@react-navigation/native'
import { store } from '../../store'

export default ManagerCategoryScreen = () => {
  const navigation = useNavigation()
  const renderItem = useCallback(({ item }) => <ListItem onPress={item => navigation.navigate('Category', { item: item, isCreate: false })} onRemove={item => remove(item)} item={item} />)

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const remove = async item => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete the category, does this mean deleting all products related to that category?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Confirm',
        onPress: async () => {
          setLoading(true)
          await store.category.delete(item, store.user.currentUser, store.product)
          setList(store.category.categories)
          setLoading(false)
        }
      }
    ])
  }

  useEffect(() => {
    navigation.addListener('focus', async () => {
      if (!store.category.loading) return setList(store.category.categories)

      setLoading(true)
      const setTimer = setInterval(() => {
        if (store.category.loading) return

        setList(store.category.categories)
        setLoading(store.category.loading)
        clearInterval(setTimer)
      }, 1000)
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
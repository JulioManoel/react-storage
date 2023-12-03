import { ActivityIndicator, Alert, FlatList, StyleSheet, View } from 'react-native'
import Title from '../../components/atoms/Title'
import Search from '../../components/atoms/Search'
import ListItem from '../../components/molecules/ListItem'
import ItemTab from '../../components/atoms/ItemTab'
import { useCallback, useEffect, useState } from 'react'
import FloatButton from '../../components/atoms/FloatButton'
import { useNavigation } from '@react-navigation/native'
import { store } from '../../store'

export default ManagerProductScreen = () => {
  const navigation = useNavigation()
  const renderItem = useCallback(({ item }) => <ListItem onPress={item => navigation.navigate('Product', { item: item, isCreate: false })} onRemove={item => remove(item)} item={item} />)

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const remove = async item => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this product?', [
      { text: 'Cancel' },
      {
        text: 'Confirm',
        onPress: async () => {
          setLoading(true)
          await store.product.delete(item, store.user.currentUser)
          setList(store.product.products)
          setLoading(false)
        }
      }
    ])
  }

  useEffect(() => {
    navigation.addListener('focus', async () => {
      console.log(store.product.products)
      if(!store.product.loading) return setList(store.product.products)
      
      setLoading(true)
      const setTimer = setInterval(() => {
        if (store.product.loading) return 
    
        setList(store.product.products)
        setLoading(store.product.loading)
        clearInterval(setTimer)
      }, 1000)
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Title title="Manage Product" />

      <Search setList={setList} data={store.product.products} />

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

      <FloatButton icon="plus" backgroundColor="#00C193" onPress={() => navigation.navigate('Product', { isCreate: true })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
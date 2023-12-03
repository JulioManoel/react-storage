import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import Avatar from '../../components/atoms/Avatar'
import FloatButton from "../../components/atoms/FloatButton"
import { useEffect, useState } from 'react'
import { store } from '../../store'
import { useNavigation } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select'

export default ProductScreen = ({ route }) => {
  const navigation = useNavigation()

  const [categories, setCategories] = useState([])

  const [name, setName] = useState(route.params.item ? route.params.item.name : '')
  const [description, setDescription] = useState(route.params.item ? route.params.item.description : '')
  const [category, setCategory] = useState(route.params.item ? route.params.item.category : '')
  const [code, setCode] = useState(route.params.item ? route.params.item.name : '')
  const [price, setPrice] = useState(route.params.item ? route.params.item.description : '')
  const [stock, setStock] = useState(route.params.item ? route.params.item.description : '')
  const [isView, setIsView] = useState(route.params.item ? route.params.item.isView : false)
  const [image, setImage] = useState(route.params.item ? route.params.item.image : '')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigation.addListener('focus', () => {
      setCategories(store.category.categories.map(category => ({
        label: category.name,
        key: category.id,
        value: category.id
      })))
    })
  }, [navigation])

  const onSubmit = async () => {
    if(!name || !description || !code || !price || !stock || !category) return 
    
    setLoading(true)
    if (route.params.isCreate === true) await store.product.create({ name, description, code, category, price, stock, isView, image }, store.user.currentUser)
    // else await store.product.update({ name, description, isView, image, id: route.params.item.id })
    navigation.navigate('ManagerProduct')
    setLoading(false)
  }

  return (
    <View style={styles.container}>

      <Avatar character={name[0]} size={125} borderRadius={15} />

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={text => setName(text)} />
        <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={text => setDescription(text)} />
        <TextInput style={styles.input} placeholder="Code" value={code} onChangeText={text => setCode(text)} />
        <RNPickerSelect placeholder={{ label: 'Select Category', value: null }} value={category} onValueChange={value => setCategory(value)} items={categories} />

        <TextInput style={styles.input} inputMode="numeric" placeholder="Price" value={price} onChangeText={text => setPrice(text)} />
        <TextInput style={styles.input} inputMode="decimal" placeholder="Stock" value={stock} onChangeText={text => setStock(text)} />

        <View style={styles.viewToggle}>
          <Text>View Catalog</Text>
          <Switch value={isView} onValueChange={value => setIsView(value)} />
        </View>
      </View>

      <FloatButton icon="save" backgroundColor="#00C193" onPress={() => onSubmit()} loading={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    width: 225,
    marginTop: 20,
    justifyContent: 'center',
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10
  },

  viewToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
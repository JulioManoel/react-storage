import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import Avatar from '../../components/atoms/Avatar'
import FloatButton from "../../components/atoms/FloatButton"
import { useState } from 'react'
import { store } from '../../store'
import { useNavigation } from '@react-navigation/native'

export default CategoryScreen = ({ route }) => {
  const navigation = useNavigation()

  const [name, setName] = useState(route.params.item ? route.params.item.name : '')
  const [description, setDescription] = useState(route.params.item ? route.params.item.description : '')
  const [isView, setIsView] = useState(route.params.item ? route.params.item.isView : false)
  const [image, setImage] = useState(route.params.item ? route.params.item.image : '')
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if(!name || !description) return 
    
    setLoading(true)
    if (route.params.isCreate === true) await store.category.create({ name, description, isView, image }, store.user.currentUser)
    else await store.category.update({ name, description, isView, image, id: route.params.item.id })
    navigation.navigate('ManagerCategory')
    setLoading(false)
  }

  return (
    <View style={styles.container}>

      <Avatar character={name[0]} size={125} borderRadius={15} />

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={text => setName(text)} />
        <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={text => setDescription(text)} />

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
    height: 200,
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
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import Avatar from '../components/atoms/Avatar'
import FloatButton from "../components/atoms/FloatButton"
import { useState } from 'react'
import { store } from '../store'

export default CategoryScreen = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isView, setIsView] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    setLoading(true)

    setLoading(false)
  }

  return (
    <View style={styles.container}>

      <Avatar url={null} character="G" size={125} borderRadius={15} />

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
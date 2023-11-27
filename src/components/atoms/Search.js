import { useEffect, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"

export default Search = ({ setList, data }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if(!data) return
    setList(data.filter(item => item.name.toUpperCase().includes(search.toUpperCase())))
  }, [search])

  return (
    <View style={styles.container}>
      <View style={styles.borders}>
        <TextInput placeholder="Search" style={styles.search} value={search} onChangeText={text => setSearch(text)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },

  borders: {
    width: '60%',
    borderRadius: 20,
    borderWidth: 1,
  },

  search: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  }
})
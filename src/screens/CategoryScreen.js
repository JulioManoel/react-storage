import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import Avatar from '../components/atoms/Avatar'
import Title from '../components/atoms/Title'

export default CategoryScreen = () => {
  return (
    <View style={styles.container}>

      <Title title="Category" />
      <Avatar url={null} character="G" size={70} borderRadius={20} />

      <TextInput placeholder="Title Category" />
      <TextInput placeholder="Description Category" />

      <View style={styles.viewToggle}>
        <Text>View Catalog</Text>
        <Switch />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",    
  }
})
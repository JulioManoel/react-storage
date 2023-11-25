import { StyleSheet, Text, TextInput, View } from "react-native"
import Avatar from "../components/atoms/Avatar"
import Title from "../components/atoms/Title"

export default CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Title title="Category" />

      <Avatar url={null} character="G" size={70} borderRadius={20} />

      <TextInput placeholder="Title Category" />
      <TextInput placeholder="Description Category" />
      <Text>View Catalog</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
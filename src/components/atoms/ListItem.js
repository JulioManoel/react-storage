import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Avatar from './Avatar'
import { useNavigation } from "@react-navigation/native"

export default ListItem = ({ item }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Category')}>
      <Avatar url={item.image} character={item.title[0]} borderRadius={10} size={60} />

      <View style={styles.texts}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  texts: {
    marginLeft: 20,
    flexDirection: 'column',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  description: {
    fontSize: 14,
  },
})
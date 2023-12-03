import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Avatar from '../atoms/Avatar'
import { useNavigation } from "@react-navigation/native"
import Icon from '@expo/vector-icons/FontAwesome'

export default ListItem = ({ item, onPress, onRemove }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Avatar styles={styles.avatar} url={item.image} character={item.name[0]} borderRadius={10} size={60} />

      <View style={styles.texts}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <TouchableOpacity style={styles.icon} onPress={() => onRemove(item)}>
        <Icon  name="trash-o" color="#FF0000" size={20}/>
      </TouchableOpacity>
      
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

  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  description: {
    fontSize: 14,
  },

  icon: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 30,
  }
})
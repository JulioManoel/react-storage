import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/Entypo'

export default ManageCard = (props) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: props.backgroundColor }]} onPress={props.onPress}>
      <Icon name={props.icon} size={45} color="#FFFFFF" />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 95,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
})
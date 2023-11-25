import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome'

export default FloatButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Icon name="plus" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    right: '5%'
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00213B',
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10
    },
    backgroundColor: '#0099FF'
  }
})
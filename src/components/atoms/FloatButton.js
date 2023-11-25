import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome'

export default FloatButton = ({ icon, backgroundColor, loading = false, onPress = () => {} }) => {
  const button = { ...styles.button, backgroundColor}

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={loading} onPress={onPress}>
        <View style={button}>
          { loading ? (
            <ActivityIndicator size="large" color="#ffffff" />
          ) : (
            <Icon name={icon} size={30} color="#ffffff" />
          )}
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
  }
})
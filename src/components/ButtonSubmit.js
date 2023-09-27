import { Button, StyleSheet, TouchableOpacity, Text, View } from "react-native"

export default ButtonSubmit = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submit} onPress={props.onPress}>
        <Text style={styles.login}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    marginTop: 20,
  },

  submit: {
    height: '100%',
    backgroundColor: '#2400FF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  login: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
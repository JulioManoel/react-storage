import { StyleSheet, TextInput, View } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

export default InputIcon = (props) => {
  return (
    <View style={styles.inputIcon}>
      <Icon name={props.icon} style={styles.icon} size={20} />      
      <TextInput secureTextEntry={props.icon === 'key'} value={props.value} style={styles.textInput} placeholder={props.placeholder} autoCapitalize={props.placeholder !== 'Name' ? 'none' : 'words'} onChangeText={text => props.set(text)} onBlur={props.onBlur} autoComplete={props.autoComplete} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputIcon: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    marginTop: '8%'
  },

  icon: {
    marginLeft: 10,
    color: '#4D4D4D'
  },

  textInput: {
    marginLeft: 10,
    fontSize: 16,
    width: '88%'
  },
})
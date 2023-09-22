import { StyleSheet, TextInput, View } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default InputIcon = (props) => {
  return (
    <View style={styles.inputIcon}>
      {props.placeholder === 'Email' ? (
        <Entypo style={styles.icon} name="email" size={20} color="#4D4D4D" />
      ) : (
        <Ionicons style={styles.icon} name="key-outline" size={20} color="#4D4D4D" />
      )}
      
      
      <TextInput style={styles.textInput} placeholder={props.placeholder} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputIcon: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    marginTop: '8%',
  },

  icon: {
    marginLeft: 10,
  },

  textInput: {
    marginLeft: 10,
    fontSize: 16
  },
})
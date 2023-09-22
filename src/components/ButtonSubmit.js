import { Button, StyleSheet, View } from "react-native"

export default ButtonSubmit = () => {
  return (
    <View style={styles.submit}>
        <Button title="Login" color="#2400FF" />
    </View>
  )
}

const styles = StyleSheet.create({
  submit: {
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
  },
})
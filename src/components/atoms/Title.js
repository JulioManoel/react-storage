import { StyleSheet, Text } from "react-native"

export default Title = ({ title }) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 40,
    marginLeft: 20
  },
})
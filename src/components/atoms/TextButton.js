import { StyleSheet, Text, View } from 'react-native'

export default TextButton = (props) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.singUp} onPress={props.onPress}>{props.button}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },

  text: {
    color: '#585858'
  },

  singUp: {
    marginLeft: 5,
    color: "#3B00E2"
  }
})
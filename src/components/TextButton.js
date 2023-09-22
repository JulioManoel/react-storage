import { StyleSheet, Text, View } from "react-native";

export default TextButton = () => {
  return (
    <View flexDirection="row">
      <Text>Don't have an account?</Text>
      <Text style={styles.singUp}>Sing Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singUp: {
    marginLeft: 5,
    color: "#3B00E2"
  }
})
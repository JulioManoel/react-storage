import { Alert, Image, StyleSheet, Text, View } from "react-native";
import TextButton from "../components/TextButton";
import InputIcon from "../components/InputIcon";
import ButtonSubmit from "../components/ButtonSubmit";

export default LoginScree = ({ navigation }) => {
  const handleClickLogin = () => {
    navigation.navigate('Login')
  }

  const onSubmit = () => {
    navigation.navigate('HomeTabs')
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/register.png")} />
      <Text style={styles.titulo}>Sign Up</Text>

      <View style={styles.form} onPress={onSubmit}>
        <InputIcon placeholder="Email" />
        <InputIcon placeholder="Password" />
        <InputIcon placeholder="Confirm Password" />
      </View>

      <ButtonSubmit title='Sing Up' />

      <TextButton onPress={handleClickLogin} text="I have an account?" button="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: "10%",
    fontWeight: "bold",
    fontSize: 40,
  },

  form: {
    marginTop: '5%',
    width: '80%'
  },
});

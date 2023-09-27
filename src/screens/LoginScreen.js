import { Alert, Image, StyleSheet, Text, View } from "react-native";
import TextButton from "../components/TextButton";
import InputIcon from "../components/InputIcon";
import SocialButton from "../components/SocialButton";
import ButtonSubmit from "../components/ButtonSubmit";
import AuthController from "../controller/authController";

export default LoginScree = ({ navigation }) => {
  const handleClickSingUp = () => {
    navigation.navigate('Register')
  }

  const onSubmit = () => {
    navigation.navigate('HomeTabs')
  }

  const a = () => {
    AuthController().google()
  }

  const github = require('../assets/images/github.png');
  const facebook = require('../assets/images/facebook.png');
  const google = require('../assets/images/google.png');

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/login.png")} />
      <Text style={styles.titulo}>Login</Text>

      <View style={styles.form}>
        <InputIcon placeholder="Email" />
        <InputIcon placeholder="Password" />
      </View>

      <ButtonSubmit title="Login" onPress={onSubmit} />

      <Text style={styles.loginWith}>Or, login with...</Text>

      <View style={styles.gridSocial}>
        <SocialButton source={facebook} />
        <SocialButton source={google} onPress={a} />
        <SocialButton source={github} />
      </View>

      <TextButton onPress={handleClickSingUp} text="Don't have an account?" button="Sing Up" />
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

  loginWith: {
    marginTop: 10,
    color: '#585858'
  },

  gridSocial: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

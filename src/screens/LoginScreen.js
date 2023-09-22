import { Image, StyleSheet, Text, View } from "react-native";
import TextButton from "../components/TextButton";
import InputIcon from "../components/InputIcon";
import SocialButton from "../components/SocialButton";
import ButtonSubmit from "../components/ButtonSubmit";

export default LoginScree = () => {
  const github = require('../assets/github.png');
  const facebook = require('../assets/facebook.png');
  const google = require('../assets/google.png');

  return (
    <View style={styles.container}>
      <Image source={require("../assets/login.png")} />
      <Text style={styles.titulo}>Login</Text>

      <View style={styles.form}>
        <InputIcon placeholder="Email" />
        <InputIcon placeholder="Password" />
      </View>

      <ButtonSubmit />

      <Text>Login with...</Text>

      <View style={styles.gridSocial}>
        <SocialButton source={facebook} />
        <SocialButton source={google} />
        <SocialButton source={github} />
      </View>

      <TextButton />
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

  gridSocial: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

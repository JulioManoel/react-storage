import { Image, StyleSheet, Text, View } from 'react-native'
import TextButton from '../components/atoms/TextButton'
import InputIcon from '../components/atoms/InputIcon'
import SocialButton from '../components/atoms/SocialButton'
import ButtonSubmit from '../components/atoms/ButtonSubmit'
import { useEffect, useState } from 'react'
import { store } from '../store'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default LoginScree = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [touched, setTouched] = useState({ name: false, password: false })

  useEffect(() => {
    if (store.user.currentUser) return

    AsyncStorage.getItem('auth').then(async auth => {
      if (!auth) return

      const payload = JSON.parse(auth)
      await store.user.login(payload)
      if (store.user.currentUser) navigation.navigate('HomeTabs')
    })
  })

  useEffect(() => {
    let errors = {}

    if (touched.email && !email) errors.email = 'Email is required'
    else if (touched.email && !/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid'

    if (touched.password && !password) errors.password = 'Password is required'
    else if (touched.password && password.length < 6) errors.password = 'Password must be at least 6 characters'

    setErrors(errors)
    setIsFormValid(Object.keys(errors).length === 0)
  }, [email, password])

  const onSubmit = async () => {
    if (!isFormValid) return

    setLoading(true)

    await store.user.login({ email, password })
    if (store.user.currentUser) navigation.navigate('HomeTabs')

    setLoading(false)
  }

  const github = require('../assets/images/github.png')
  const google = require('../assets/images/google.png')
  const facebook = require('../assets/images/facebook.png')

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/login.png")} />
      <Text style={styles.titulo}>Login</Text>

      <View style={styles.form}>
        <InputIcon value={email} set={setEmail} placeholder="Email" icon="at" onBlur={() => setTouched({ ...touched, email: true })} autoComplete="email" />
        {errors.email && (<Text style={styles.errors}>{errors.email}</Text>)}

        <InputIcon value={password} set={setPassword} placeholder="Password" icon="key" onBlur={() => setTouched({ ...touched, password: true })} autoComplete="off" />
        {errors.password && (<Text style={styles.errors}>{errors.password}</Text>)}
      </View>

      <ButtonSubmit title="Login" onPress={onSubmit} loading={loading} />

      <Text style={styles.loginWith}>Or, login with...</Text>

      <View style={styles.gridSocial}>
        <SocialButton source={facebook} />
        <SocialButton source={google} />
        <SocialButton source={github} />
      </View>

      <TextButton onPress={() => navigation.navigate('Register')} text="Don't have an account?" button="Sing Up" />
    </View>
  )
}

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
    fontSize: 40
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
    justifyContent: 'space-between'
  },

  errors: {
    color: 'red',
    fontSize: 12,
    marginTop: 5
  }
})

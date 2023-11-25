import { Image, StyleSheet, Text, View } from 'react-native'
import TextButton from '../components/atoms/TextButton'
import InputIcon from '../components/atoms/InputIcon'
import ButtonSubmit from '../components/atoms/ButtonSubmit'
import { useEffect, useState } from 'react'
import { store } from '../store'

export default RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirm: false,
  })

  useEffect(() => {
    let errors = {}

    if (touched.name && !name) errors.name = 'Name is required'

    if (touched.email && !email) errors.email = 'Email is required'
    else if (touched.email && !/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid'

    if (touched.password && !password) errors.password = 'Password is required'
    else if (touched.password && password.length < 6) errors.password = 'Password must be at least 6 characters'

    if(touched.confirm && password !== confirm) errors.confirm = 'Passwords do not match'

    setErrors(errors)
    setIsFormValid(Object.keys(errors).length === 0)
  }, [name, email, password, confirm])

  const onSubmit = async () => {
    if (!isFormValid) return

    setLoading(true)

    if (password === confirm) await store.user.create({ name, email, password })
    if (store.user.currentUser) navigation.navigate('HomeTabs')

    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/register.png")} />
      <Text style={styles.titulo}>Sign Up</Text>

      <View style={styles.form} onPress={onSubmit}>
        <InputIcon value={name} set={setName} placeholder="Full Name" icon="user" onBlur={() => setTouched({ ...touched, name: true })} autoComplete="name" />
        { errors.name && ( <Text style={styles.errors}>{errors.name}</Text> )}
        
        <InputIcon value={email} set={setEmail} placeholder="Email" icon="at" onBlur={() => setTouched({ ...touched, email: true })} autoComplete="email" />
        { errors.email && ( <Text style={styles.errors}>{errors.email}</Text> )}

        <InputIcon value={password} set={setPassword} placeholder="Password" icon="key" onBlur={() => setTouched({ ...touched, password: true })} autoComplete="new-password" />
        { errors.password && ( <Text style={styles.errors}>{errors.password}</Text> )}

        <InputIcon value={confirm} set={setConfirm} placeholder="Confirm Password" icon="key" onBlur={() => setTouched({ ...touched, confirm: true })} autoComplete="off" />
        { errors.confirm && ( <Text style={styles.errors}>{errors.confirm}</Text> )}
      </View>

      <ButtonSubmit title='Sing Up' onPress={onSubmit} loading={loading} />
      <TextButton onPress={() => navigation.navigate('Login')} text="I have an account?" button="Login" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 40,
  },

  form: {
    marginTop: '5%',
    width: '80%'
  },
  
  errors: {
    color: 'red',
    fontSize: 12,
    marginTop: 5
  }
})

import { StyleSheet, Text, View } from "react-native"
import Avatar from "../components/atoms/Avatar"
import { store } from '../store'
import { useState } from "react"

export default SettingScreen = () => {
  const [user, setUser] = useState(store.user.currentUser)

  return (
    <View>
      <Avatar user={user} />
    </View>
  )
}

const styles = StyleSheet.create({

})
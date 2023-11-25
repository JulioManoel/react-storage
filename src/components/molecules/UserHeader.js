import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { store } from '../../store'
import Avatar from '../atoms/Avatar'

export default UserHeader = () => {
  const [user, setUser] = useState(store.user.currentUser)

  return (
    <View>
      <View style={styles.headerBar}>
        <View>
          <Text style={styles.text}>Welcome</Text>
          <Text style={[styles.text, styles.name]}>{user.displayName}</Text>
        </View>

        <Avatar url={user.photoURL} character={user.displayName[0]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#0099FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingBottom: 120,
    paddingLeft: 40,
    paddingRight: 50
  },

  text: {
    fontSize: 15,
    fontWeight: '300',
    color: '#F5F5F5',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

export default ButtonNew = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.focused ? '#3eccf5' : '#6fdfff' }]}>
      <Icon name="plus" color="#ffffff" size={props.size} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  }
})
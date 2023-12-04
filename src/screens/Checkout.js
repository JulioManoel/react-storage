import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { store } from '../store'
import ScreenHeader from '../components/molecules/ScreenHeader'
import CheckoutList from '../components/molecules/CheckoutList'

let currentScreen = 'Checkout'
const data = [
    {
        categoryId: 1,
        categoryName: 'Camiseta'
    },
    {
        categoryId: 2,
        categoryName: 'Moletons'
    },
    {
        categoryId: 3,
        categoryName: 'Calças'
    },    {
        categoryId: 4,
        categoryName: 'Tênis'
    },
]

export default Checkout = () => {
  const [user, setUser] = useState(store.user.currentUser)
  

  return (
    <View>
       <ScreenHeader style={styles.headerContainer} currentScreen={currentScreen}/>
       <CheckoutList/>
    </View>
  )
}

const styles = StyleSheet.create({

})
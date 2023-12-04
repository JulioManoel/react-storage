import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { store } from '../store'
import ScreenHeader from '../components/molecules/ScreenHeader'
import ItemsList from '../components/molecules/ItemsList'
import FloatButton from '../components/atoms/FloatButton'

let currentScreen = 'Camisetas'
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

export default CategoryItemsList = () => {
  const [user, setUser] = useState(store.user.currentUser)
  const navigation = useNavigation()

  return (
    <View>
        <ScreenHeader currentScreen={currentScreen}/>
        <ItemsList/>
        <FloatButton style={styles.FloatButton} icon="shopping-cart" backgroundColor="#00C193" onPress={() => navigation.navigate('Checkout')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },

    categoryContainer: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderRadius: 12,
        width: 100,
        height: 100,
        margin: 20,
    },

    categoryName: {
        marginTop: 'auto',
        marginBottom: -25,
    },
})
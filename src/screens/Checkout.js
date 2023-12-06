import React, { useState } from 'react'
import { View } from 'react-native'
import { store } from '../store'
import CheckoutList from '../components/molecules/CheckoutList'
import Title from '../components/atoms/Title'

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
        <Title title="Checkout" />
        <CheckoutList/>
    </View>
  )
}
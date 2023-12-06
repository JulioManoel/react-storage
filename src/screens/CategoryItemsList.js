import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import ItemsList from '../components/molecules/ItemsList'
import FloatButton from '../components/atoms/FloatButton'
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
    },
    {
        categoryId: 4,
        categoryName: 'Tênis'
    },
]

export default CategoryItemsList = ({ route }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Title title="Camisetas" />
            <ItemsList category={route.params.item} />

            <FloatButton icon="shopping-cart" backgroundColor="#00C193" onPress={() => navigation.navigate('Checkout')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
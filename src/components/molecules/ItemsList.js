import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { store } from '../../store'
import Avatar from '../atoms/Avatar'

const data = [
    {
        categoryId: 1,
        categoryName: 'Camiseta 01'
    },
    {
        categoryId: 2,
        categoryName: 'Camiseta 02'
    },
    {
        categoryId: 3,
        categoryName: 'Camiseta 03'
    },    {
        categoryId: 4,
        categoryName: 'Camiseta 04'
    },
]

export default ItemsList = () => {
  const [user, setUser] = useState(store.user.currentUser)
  const navigation = useNavigation()

  return (
    <View>
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={item => item.categoryId}
            showsHorizontalScrollIndicator={false}
            numColumns={3}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate('CategoryItemsList')}>
                <View style={styles.categoryContainer}>                        
                    <Text style={styles.categoryName}>{item.categoryName}</Text>
                </View>
            </TouchableOpacity>}
            />
        </View>
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
    }
})
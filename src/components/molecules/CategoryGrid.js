import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { store } from '../../store'
import Avatar from '../atoms/Avatar'

export default CategoryGrid = () => {
    const navigation = useNavigation()

    const [list] = useState(store.category.categories)

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('CategoryItemsList', { item: item })}>
                        <Avatar character={item.name[0]} size={100} borderRadius={10} />
                        <Text style={styles.categoryName}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    categoryContainer: {
        alignItems: 'center',
        width: 100,
        height: 125,
        margin: 19,
    },

    categoryName: {
        marginTop: 'auto',
    }
})
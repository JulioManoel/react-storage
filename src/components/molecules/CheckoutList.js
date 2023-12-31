import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { store } from '../../store'
import Avatar from '../atoms/Avatar'

const data = [
    {
        productId: '#FXZ-4567',
        productName: 'Apple iPhone 13',
        productPrice: '$999.99'
    },
    {
        productId: '#FXZ-3456',
        productName: 'Nike Air Jordan',
        productPrice: '$72.40'
    },
    {
        productId: '#FXZ-9485',
        productName: 'Beats Studio 2',
        productPrice: '$99.00'
    },    {
        productId: '#FXZ-4569',
        productName: 'Apple Watch Series',
        productPrice: '$249.99'
    },
]

export default PopularProducts = () => {
  const [user, setUser] = useState(store.user.currentUser)

  return (
    <View>
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={item => item.productId}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => 
            <TouchableOpacity>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={require('../../assets/images/productImage.png')} />
                        <View>
                            <Text style={styles.productName}>{item.productName}</Text>
                            <Text style={styles.productId}>{item.productId}</Text>
                        </View>
                    <Text style={styles.productPrice}>{item.productPrice}</Text>
                </View>
            </TouchableOpacity>}/>
        </View>
        <View style={styles.checkoutButtonContainer}>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        height: '80%',
        marginTop: 40,
    },

    containerText: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 14,
        marginLeft: 20,
        marginBottom: 20,
    },

    productContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    productImage: {
        margin: 8,
    },

    productId: {
        fontSize: 14,
        color: '#575757'
    },

    productName: {
        fontSize: 16,
        color: '#000000',
    },

    productPrice: {
        marginRight: 0,
        marginLeft: 'auto',
        fontSize: 18,
        fontWeight: '400',
        marginRight: 10,
    },

    checkoutButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5000FA',
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 25,
    },

    checkoutButton: {
        justifyContent: 'center',
        height: 50,
    },

    checkoutButtonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#FFFFFF'
    },
})
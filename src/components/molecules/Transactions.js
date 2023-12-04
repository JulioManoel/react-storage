import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { store } from '../../store'
import Avatar from '../atoms/Avatar'

const data = [
    {
        transactionType: 'Product Buy',
        transactionPaymenntMethod: 'Wallet',
        transactionValue: '-$75',

    },
    {
        transactionType: 'Product Buy',
        transactionPaymenntMethod: 'Wallet',
        transactionValue: '-$75',

    },    {
        transactionType: 'Product Buy',
        transactionPaymenntMethod: 'Wallet',
        transactionValue: '-$75',

    },    {
        transactionType: 'Product Buy',
        transactionPaymenntMethod: 'Wallet',
        transactionValue: '-$75',

    },
]

export default Transactions = () => {
  const [user, setUser] = useState(store.user.currentUser)

  return (
    <View>
        <ScrollView style={styles.container}>
            <Text style={styles.containerText}>Transactions</Text>
            <FlatList
            data={data}
            keyExtractor={item => item.productId}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => 
            <TouchableOpacity>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={require('../../assets/images/transactionIcon.png')} />
                        <View>
                            <Text style={styles.transactionType}>{item.transactionType}</Text>
                            <Text style={styles.transactionPaymenntMethod}>{item.transactionPaymenntMethod}</Text>
                        </View>
                    <Text style={styles.transactionValue}>{item.transactionValue}</Text>
                </View>
            </TouchableOpacity>}
            />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        margin: 24,
        borderRadius: 12,
        marginTop: -10,
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

    transactionPaymenntMethod: {
        fontSize: 14,
        color: '#575757'
    },

    transactionType: {
        fontSize: 16,
        color: '#000000'
    },

    transactionValue: {
        marginRight: 0,
        marginLeft: 'auto',
        fontSize: 18,
        color: '#BB0000',
        fontWeight: '400',
        marginRight: 10,
    },
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function ScreenHeader(props) {
    let currentScreen = props.currentScreen

    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={styles.pageText}>{currentScreen}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    pageText: {
        fontSize: 28,
        fontWeight: '500',
        marginTop: 50,
        marginLeft: 30,
    }
})
import React from 'react'
import { View, StyleSheet } from "react-native"

const AppCard = (props) => {
    return (
        <View style={ {...styles.default,  ...props.style} }>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        // IOS
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 2,
            height: 2
        },
        // Android
        elevation: 8
    }
})

export default AppCard
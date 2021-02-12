import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'

import THEME from '../theme'
import { TextBold } from './ui/app-text'

const Navbar = () => {

    return (
        <View style={{ ...styels.navBar, ...Platform.select({
            ios: styels.navBarIos,
            android: styels.navBarAndroid
        }) }}>
            <TextBold style={styels.text}>Todo App</TextBold>
        </View>
    )
}

const styels = StyleSheet.create({
    navBar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10

    },
    navBarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navBarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20
    }
})

export default Navbar
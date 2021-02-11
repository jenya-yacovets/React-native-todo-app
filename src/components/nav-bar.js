import React from 'react'
import { View, StyleSheet} from 'react-native'
import THEME from '../theme'
import { TextBold } from './ui/app-text'

const Navbar = (props) => {
    return (
        <View style={styels.navBar}>
            <TextBold style={styels.text}>Todo App</TextBold>
        </View>
    )
}

const styels = StyleSheet.create({
    navBar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10

    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default Navbar
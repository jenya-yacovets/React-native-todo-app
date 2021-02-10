import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import THEME from '../theme'

const Navbar = (props) => {
    return (
        <View style={styels.navBar}>
            <Text style={styels.text}>Todo App</Text>
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
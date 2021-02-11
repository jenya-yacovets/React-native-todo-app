import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextApp = (props) => {
    return <Text style={ {...styles.regular, ...props.style }}>{ props.children }</Text>
}

const TextBold = (props) => {
    return <Text style={ {...styles.bold, ...props.style }}>{ props.children }</Text>
}

const TextLigth = (props) => {
    return <Text style={ {...styles.ligth, ...props.style }}>{ props.children }</Text>
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: 'montserratRegular'
    },
    bold: {
        fontFamily: 'montserratBold'
    },
    ligth: {
        fontFamily: 'montserratExtraLight'
    }
})

export default TextApp

export {
    TextApp,
    TextBold,
    TextLigth
}
import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, View, StyleSheet, Platform } from 'react-native'

import THEME from '../../theme'
import AppText from './app-text'

const AppButton = ({ children, onPress, style, color = THEME.MAIN_COLOR }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

    return(
        <Wrapper onPress={ onPress } activeOpacity={0.75}>
            <View style={{ ...styles.button, backgroundColor: color, ...style }}>
                <AppText style={ styles.text }>{ children }</AppText>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})

export default AppButton
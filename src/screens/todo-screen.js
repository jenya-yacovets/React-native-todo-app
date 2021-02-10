import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import THEME from '../theme'

const ScreenTodo = ({ closeTodo, todo: { title } }) => {
    return(
        <View>
            <View style={styles.buttons}>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {closeTodo(null)}} color={THEME.DANGER_COLOR} title='< назад'/>
                </View>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {}} color={THEME.GREY_COLOR} title='удалить'/>
                </View>
            </View>
        
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonBlock: {
        width: '49%'
    }
})

export default ScreenTodo
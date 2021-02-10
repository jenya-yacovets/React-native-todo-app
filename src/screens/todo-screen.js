import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const ScreenTodo = ({ closeTodo, todo: { title } }) => {
    return(
        <View>
            <View style={styles.buttons}>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {closeTodo(null)}} color='#757575' title='< назад'/>
                </View>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {}} color='#e53935' title='удалить'/>
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
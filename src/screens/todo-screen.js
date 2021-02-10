import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import AppCard from '../components/ui/app-card'
import THEME from '../theme'

const ScreenTodo = ({ closeTodo, todo: { title } }) => {
    return(
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.titleText}>{title}</Text>
                <Button title='Ред.'/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {closeTodo(null)}} color={THEME.DANGER_COLOR} title='< назад'/>
                </View>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {}} color={THEME.GREY_COLOR} title='удалить'/>
                </View>
            </View>
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
    },
    titleText: {
        fontSize: 30
    },
    card: {
        marginBottom: 15
    }
})

export default ScreenTodo
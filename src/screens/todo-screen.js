import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import EditModal from '../components/edit-modal'
import AppCard from '../components/ui/app-card'
import THEME from '../theme'

const ScreenTodo = ({ editTodo, closeTodo, removeTodo, todo: { id, title } }) => {

    const [modal, setModal] = useState(false)

    const onEdit = (value) => {

        editTodo({
            id,
            title: value
        })
        setModal(false)
    }

    return(
        <View>
            <EditModal 
            visible={modal} 
            onCancel={() => { setModal(false) }} 
            title={ title }
            editTodo={ onEdit }
            />

            <AppCard style={styles.card}>
                <Text style={styles.titleText}>{title}</Text>
                <Button 
                title='Ред.'
                onPress={() => { setModal(true) }}
                />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => {closeTodo(null)}} color={THEME.GREY_COLOR} title='< назад'/>
                </View>
                <View style={styles.buttonBlock}>
                    <Button onPress={() => removeTodo(id)} color={THEME.DANGER_COLOR} title='удалить'/>
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
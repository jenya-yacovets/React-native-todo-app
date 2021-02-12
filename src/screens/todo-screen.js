import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

import EditModal from '../components/edit-modal'
import AppButton from '../components/ui/app-button'
import AppCard from '../components/ui/app-card'
import { TextBold } from '../components/ui/app-text'
import THEME from '../theme'
import TodoContext from '../context/todo/todo-context'
import ScreenContext from '../context/screen/screen-context'

const ScreenTodo = () => {
    
    const { updateTodo, removeTodo, todos } = useContext(TodoContext)
    const { screen, updateScreen } = useContext(ScreenContext)

    const { id, title } = todos.find(item => item.id === screen)

    const [modal, setModal] = useState(false)

    const onEdit = async (value) => {

        await updateTodo({
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
            onEdit={ onEdit }
            />

            <AppCard style={styles.card}>
                <TextBold style={styles.titleText}>{title}</TextBold>
                <AppButton onPress={() => { setModal(true) }}>
                    <FontAwesome name="edit" size={20} color="#fff" />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.buttonBlock}>
                    <AppButton onPress={() => {updateScreen(null)}} color={THEME.GREY_COLOR}>
                        <AntDesign name="back" size={18} color="#fff" />  Назад
                    </AppButton>
                </View>
                <View style={styles.buttonBlock}>
                <AppButton onPress={() => removeTodo(id)} color={THEME.DANGER_COLOR}>
                    <AntDesign name="delete" size={18} color="#fff" />  Удалить
                </AppButton>
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
        width: Dimensions.get('window').width / 2 - 20
    },
    titleText: {
        fontSize: 30
    },
    card: {
        marginBottom: 15
    }
})

export default ScreenTodo
import React, { useState } from 'react'
import { View, StyleSheet, Modal, TextInput } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import THEME from '../theme'
import AppButton from './ui/app-button'

const EditModal = ({ title, visible, onCancel, editTodo }) => {

    const [value, setValue] = useState(title)

    return(
        <Modal
        visible={visible}
        animationType='slide'
        transparent={false}
        >
            <View style={ styles.wrap }>
                <TextInput 
                style={styles.input}
                value={ value }
                onChangeText={setValue}
                />
                <View style={styles.buttons}>
                    <AppButton onPress={ onCancel } color={ THEME.DANGER_COLOR }>
                    <AntDesign name="close" size={18} color="#fff" />  Закрыть
                    </AppButton>
                    <AppButton onPress={() => { editTodo(value) }}>
                    <FontAwesome name="save" size={18} color="#fff" />  Сохранить
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
        fontSize: 16,
        padding: 10
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    }
})

export default EditModal
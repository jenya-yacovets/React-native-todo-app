import React, { useState } from 'react'
import { View, StyleSheet, Modal, TextInput, Button } from 'react-native'
import THEME from '../theme'

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
                    <Button 
                    title='Закрыть'
                    onPress={ onCancel }
                    color={ THEME.DANGER_COLOR }
                    />
                    <Button 
                    title='Сохранить'
                    onPress={() => { editTodo(value) }}
                    />
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
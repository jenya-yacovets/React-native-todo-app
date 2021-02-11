import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import AppButton from './ui/app-button'

const AddTodo = ({ onAddTodo }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (!value.trim()) {
            Alert.alert('Нельзя создать пустое название задачи')
            return
        }
        onAddTodo(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styels.block}>
            <TextInput 
            style={ styels.input }
            value={ value }
            onChangeText={ text => setValue(text) }
            placeholder='Введите название задачи...'
            autoCorrect={false}
            autoCapitalize='sentences'
            />
            <AppButton onPress={ pressHandler }>
                <AntDesign name="pluscircleo" size={15} />  Добавить
            </AppButton>
        </View>
    )
}

const styels = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        width: '65%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
        fontSize: 16,
        padding: 5
    }
})

export default AddTodo
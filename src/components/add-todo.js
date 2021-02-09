import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

const AddTodo = ({ addTodo }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (!value.trim()) {
            Alert.alert('Нельзя создать пустое название задачи')
            return
        }
        addTodo(value)
        setValue('')
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
            <Button onPress={ pressHandler } style={styels.button} title='Добавить' />
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
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#3949ab',
        fontSize: 16,
        padding: 5
    },
    button: {
    }
})

export default AddTodo
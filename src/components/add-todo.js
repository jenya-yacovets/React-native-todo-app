import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const AddTodo = ({ onAddTodo }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (!value.trim()) {
            Alert.alert('Нельзя создать пустое название задачи')
            return
        }
        onAddTodo(value)
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
            <AntDesign.Button name="pluscircleo" style={styels.button} onPress={ pressHandler }>
            Добавить
            </AntDesign.Button>
            
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
    },
    button: {
    }
})

export default AddTodo
import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const ScreenTodo = ({ closeTodo, todo }) => {
    return(
        <View>
            <Button onPress={() => {closeTodo()}} title='<'/>
            <Text>Todo экран</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ScreenTodo
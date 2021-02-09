import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Todo = ({todo: { title }}) => {

    return(
        <View style={ styles.todo }>
            <Text>{ title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        borderColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
    }
})

export default Todo
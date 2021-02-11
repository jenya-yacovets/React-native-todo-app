import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Todo = ({todo: { title, id }, onRemove, onOpen}) => {

    return(
        <TouchableOpacity 
        activeOpacity={ 0.5 } 
        onLongPress={ () => onRemove(id)}
        onPress={() => onOpen(id)}
        >
            <View style={ styles.todo }>
                <Text style={ styles.text }>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        borderColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
    },
    text: {
        fontFamily: 'montserratRegular'
    }
})

export default Todo
import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import ScreenContext from '../context/screen/screen-context'
import AppText from './ui/app-text'

const Todo = ({todo: { title, id }, onRemove}) => {

    const { updateScreen } = useContext(ScreenContext)

    return(
        <TouchableOpacity 
        activeOpacity={ 0.5 } 
        onLongPress={ () => onRemove(id)}
        onPress={() => updateScreen(id)}
        >
            <View style={ styles.todo }>
                <AppText>{ title }</AppText>
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
    }
})

export default Todo
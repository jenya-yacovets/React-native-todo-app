import React, { useContext, useEffect, useCallback } from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

import AddTodo from '../components/add-todo'
import Todo from '../components/todo'
import AppButton from '../components/ui/app-button'
import AppText from '../components/ui/app-text'
import Loader from '../components/ui/loader'
import TodoContext from '../context/todo/todo-context'
import THEME from '../theme'

const ScreenMain = () => {

    const { todos, addTodo, removeTodo, fetchTodos, loading, error } = useContext(TodoContext)


    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    }, [])

    if (error) {
        return (
            <View style={styles.error}>
                <AppText style={styles.textError}>
                    <MaterialIcons name="error-outline" size={23} color={THEME.DANGER_COLOR} />  {error}</AppText>
                <AppButton onPress={loadTodos}>
                    <AntDesign name="reload1" size={18} color="#fff" />  Повторить попытку
                </AppButton>
            </View>
        )
    }


    if (loading) {
        return <Loader />
    }

    let content = <FlatList
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({ item }) => <Todo
            todo={item}
            onRemove={removeTodo}
        />}
    />

    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrap}>
                <Image style={styles.image} source={require('../../assets/no-items.png')} />
            </View>
        )
    }

    return (
        <View>
            <AddTodo onAddTodo={addTodo} />
            { content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textError: {
        fontSize: 24,
        color: THEME.DANGER_COLOR,
        textAlign: 'center',
        marginBottom: 10
    }
})

export default ScreenMain
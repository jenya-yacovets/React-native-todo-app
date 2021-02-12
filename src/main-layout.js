import React, { useState, useContext } from 'react'
import { Alert, StyleSheet, View  } from 'react-native'

import NavBar from './components/nav-bar'
import TodoContext from './context/todo/todo-context';
import ScreenMain from './screens/main-screen'
import ScreenTodo from './screens/todo-screen';

const MainLayout = () => {
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)

    // const [todos, setTodos] = useState([])

    // const addTodo = (title) => {

    //     const newTodo = {
    //         id: Date.now().toString(),
    //         title
    //     }
    //     setTodos((state) => [newTodo, ...state])
    // }

    // const removeTodo = id => {

    //     const { title } = todos.find(item => item.id === id)

    //     Alert.alert(
    //         'Удалить задачу',
    //         `Вы действительно хотите удалить задачу "${title}"?`,
    //         [{
    //             text: 'Удалить',
    //             style: 'destructive',
    //             onPress: () => {

    //                 if (todoId === id) {
    //                     setTodoId(null)
    //                 }

    //                 setTodos(state => {

    //                     const newState = state.filter(todo => {
    //                         if (todo.id != id) return true
    //                     })

    //                     return [...newState]
    //                 })
    //             },
    //         }, {
    //             text: 'Отмена',
    //             style: 'cancel'
    //         }],
    //         { cancelable: false }
    //     )
    // }

    // const editTodo = ({ id, title }) => {
    //     setTodos(old => old.map(item => {
    //         if (item.id === id) {
    //             item.title = title
    //         }
    //         return item
    //     }))
    // }

    let content = <ScreenMain
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={setTodoId}
    />

    if (todoId) {
        const todo = todos.find(item => item.id === todoId)

        content = <ScreenTodo
            closeTodo={setTodoId}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={updateTodo}
        /> 
    }

    return (
        <View>
            <NavBar />
            <View style={styles.container}>
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    }
})

export default MainLayout
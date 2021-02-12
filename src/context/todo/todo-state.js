import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'

import ScreenContext from '../screen/screen-context'
import {
    ADD_TODO,
    CLEAR_ERROR,
    FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from '../types'
import TodoContext from './todo-context'
import todoReducer from './todo-reducer'

const initialState = {
    todos: [],
    loading: false,
    error: null
}

const TodoState = ({ children }) => {

    const { updateScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async title => {
        const res = await fetch(`https://react-native-todo-app-yd-default-rtdb.firebaseio.com/todos.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title
            })
        })

        const { name } = await res.json()

        dispatch({ type: ADD_TODO, title, id: name })
    }

    const removeTodo = id => {

        const { title } = state.todos.find(item => item.id === id)

        Alert.alert(
            'Удалить задачу',
            `Вы действительно хотите удалить задачу "${title}"?`,
            [{
                text: 'Удалить',
                style: 'destructive',
                onPress: async () => {
                    updateScreen(null)

                    await fetch(`https://react-native-todo-app-yd-default-rtdb.firebaseio.com/todos/${id}.json`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    dispatch({ type: REMOVE_TODO, id })
                },
            }, {
                text: 'Отмена',
                style: 'cancel'
            }],
            { cancelable: false }
        )
    }

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const res = await fetch(`https://react-native-todo-app-yd-default-rtdb.firebaseio.com/todos.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
            dispatch({ type: FETCH_TODOS, todos })
        } catch (error) {
            showError('Что-то пошло не так. Попробуйте повторить попытку позже')
            console.error(error)
        } finally {
            hideLoader()
        }
    }

    const updateTodo = async ({ id, title }) => {

        clearError()

        try {
            await fetch(`https://react-native-todo-app-yd-default-rtdb.firebaseio.com/todos/${id}.json`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title
                })
            })

            dispatch({ type: UPDATE_TODO, id, title })
        } catch (error) {
            showError(error)
            console.error(error)
        }

    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo, removeTodo, updateTodo,
            fetchTodos
        }}>
            { children}
        </TodoContext.Provider>
    )
}

export default TodoState
import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'

import ScreenContext from '../screen/screen-context'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'
import TodoContext from './todo-context'
import todoReducer from './todo-reducer'

const initialState = {
    todos: [{
        id: '1',
        title: 'Test todo'
    }]
}

const TodoState = ({ children }) => {

    const { updateScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({type: ADD_TODO, title})

    const removeTodo = id => {

        const { title } = state.todos.find(item => item.id === id)

        Alert.alert( 
            'Удалить задачу',
            `Вы действительно хотите удалить задачу "${title}"?`,
            [{
                text: 'Удалить',
                style: 'destructive',
                onPress: () => {
                    updateScreen(null)
                    dispatch({type: REMOVE_TODO, id})
                },
            }, {
                text: 'Отмена',
                style: 'cancel'
            }],
            { cancelable: false }
        )
    }

    const updateTodo = ({id, title}) => dispatch({type: UPDATE_TODO, id, title})

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo, removeTodo, updateTodo
        }}>
            { children}
        </TodoContext.Provider>
    )
}

export default TodoState
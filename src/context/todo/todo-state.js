import React, { useReducer } from 'react'
import TodoContext from './todo-context'
import todoReducer from './todo-reducer'

const initialState = {
    todos: [{
        id: '1',
        title: 'Test todo'
    }]
}

const TodoState = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoContext.Provider value={{
            todos: state.todos
        }}>
            { children}
        </TodoContext.Provider>
    )
}

export default TodoState
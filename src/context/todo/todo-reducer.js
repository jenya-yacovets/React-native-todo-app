import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"

const handlers = {
    [ADD_TODO]: (state, { title }) => ({
        ...state, todos: [
            {
                id: Date.now().toString(),
                title
            },
            ...state.todos
        ]
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state,
        todos: state.todos.filter(item => item.id !== id)
    }),
    [UPDATE_TODO]: (state, { id, title }) => ({
        ...state,
        todos: state.todos.map(item => {
            if(item.id === id) {
                item.title = title
            }
            return item
        })
    }),
    DEFAULT: state => state
}

const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export default todoReducer
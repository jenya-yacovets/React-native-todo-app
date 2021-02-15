import {
    ADD_TODO,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_LOADER,
    UPDATE_TODO,
    CLEAR_ERROR,
    SHOW_ERROR,
    FETCH_TODOS
} from "../types"

const handlers = {
    [ADD_TODO]: (state, { title, id }) => ({
        ...state, todos: [
            {
                id,
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
            if (item.id === id) {
                item.title = title
            }
            return item
        })
    }),
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [HIDE_LOADER]: state => ({ ...state, loading: false }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
    DEFAULT: state => state
}

const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export default todoReducer
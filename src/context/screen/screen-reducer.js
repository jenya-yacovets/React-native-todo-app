import { UPDATE_SCREEN } from "../types"

const handlers = {
    [UPDATE_SCREEN]: (state, {id}) => ({...state, id}),
    DEFAULT: state => state
}

const screenReduser = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export default screenReduser
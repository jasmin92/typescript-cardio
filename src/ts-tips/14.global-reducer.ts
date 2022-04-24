import { GlobalReducer } from './utils/types'

declare global {
  interface GlobalReducerEvent {
    ADD_TODO: {
      text: string
    }
  }
}

export const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (state, event) => {
  return state
}

import { TICK, ADD } from '../actions/types'

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case TICK:
      return { 
        ...state,
        lastUpdate: action.ts, 
        light: !!action.light 
      }
    case ADD:
      return {
        ...state,
        count: state.count + 1
      }
    default: return state
  }
}
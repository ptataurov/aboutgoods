import { TOGGLE_OVERLAY, SET_OVERLAY } from './actions'

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_OVERLAY: {
      return { ...state, overlayShow: !state.overlayShow }
    }
    case SET_OVERLAY: {
      return { ...state, overlayShow: payload }
    }
    default:
      return state
  }
}

export default appReducer

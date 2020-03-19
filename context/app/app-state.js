import React, { useReducer } from 'react'
import AppContext from './app-context'
import appReducer from './app-reducer'

import { TOGGLE_OVERLAY } from './actions'

const AppState = ({ children }) => {
  const initialState = {
    overlayShow: false
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const toggleOverlay = () => dispatch({ type: TOGGLE_OVERLAY })

  const setOverlay = bool => dispatch({ type: SET_OVERLAY, payload: bool })

  const { overlayShow } = state

  return (
    <AppContext.Provider value={{ overlayShow, toggleOverlay, setOverlay }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState

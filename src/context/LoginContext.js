import React, { createContext } from 'react'

const LoginContext = createContext({ login: { isLoggedIn: true } })

function LoginProvider({ children, value }) {
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}

export { LoginProvider, LoginContext }

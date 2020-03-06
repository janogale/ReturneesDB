import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// contexts Providers
import { LoginProvider } from './context/LoginContext'

import * as serviceWorker from './serviceWorker'

function MyApp() {
  const [isLogin, setLogin] = useState(false)
  return (
    <LoginProvider value={{ isLoggedIn: isLogin, setLogin }}>
      <App />
    </LoginProvider>
  )
}

ReactDOM.render(<MyApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

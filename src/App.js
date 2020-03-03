import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Register from './components/Register'

import Login from './components/Login'
import Header from './components/Header'
import SideNav from './components/SideNav'
import ListView from './components/ListView'

//css
import './assets/css/main.css'

function App() {
  return (
    <Router>
      <div className="app bg-gray-200">
        <header className="flex justify-around items-center">
          <Header />
        </header>
        <aside className="">
          <SideNav />
        </aside>
        <main>
          <Route path="/" exact component={Login} />
          <Route path="/list" exact component={ListView} />
          <Route path="/register" exact component={Register} />
        </main>
      </div>
    </Router>
  )
}

export default App

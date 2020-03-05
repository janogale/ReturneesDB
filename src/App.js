import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Register from './components/Register'

import Login from './components/Login'
import Header from './components/Header'
import SideNav from './components/SideNav'
import ListView from './components/ListView'
import SearchView from './components/SearchView'
import Reports from './components/Reports'

//css
import './assets/css/main.css'

function App() {
  return (
    <Router>
      <div className="app bg-gray-200">
        <header className="flex justify-around items-center bg-indigo-900">
          <Header />
        </header>
        <aside className="">
          <SideNav />
        </aside>
        <main>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/list" exact component={ListView} />
          <Route path="/search" exact component={SearchView} />
          <Route path="/reports" exact component={Reports} />
        </main>
      </div>
    </Router>
  )
}

export default App

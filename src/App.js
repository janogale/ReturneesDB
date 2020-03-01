import React from 'react'
import Login from './components/Login'
import Nav from './components/Nav'
import SideNav from './components/SideNav'

//css
import './assets/css/main.css'

function App() {
  return (
    <div className="app bg-gray-200">
      <header className="flex justify-around items-center">
        <Nav />
      </header>
      <aside className="">
        <SideNav />
      </aside>
      <main>
        <Login />
      </main>
    </div>
  )
}

export default App

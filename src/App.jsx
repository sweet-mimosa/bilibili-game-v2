import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import RouterConfig from './routes'

function App() {

  return (
    <div className="App">
        <Header/>

        <Footer/>
        <RouterConfig/>
    </div>
  )
}

export default App
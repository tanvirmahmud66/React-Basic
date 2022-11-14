import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'


export default function Home() {
  return (
    <Router>
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/services' component={Services}/>
    </Router>
  )
}

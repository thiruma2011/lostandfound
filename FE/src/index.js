import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import './styles/bootstrap.min.css'

// import logo from "../../images/logo.gif";

// NAVIGATION
import LFNav from './components/LFNav'

// PAGES
import Home from './pages/Home/HomePage'
import About from './pages/About/AboutPage'
import Contact from './pages/Contact/ContactPage'
import FAQ from './pages/FAQ/FAQPage'
import Login from './pages/Login/LoginPage'
import Signup from './pages/Signup/SignupPage'

// FOUND ITEM
import ShowFoundItemList from './components/ShowFoundItemList'
import ShowFoundItemDetails from './components/ShowFoundItemDetails'
import CreateFoundItem from './components/CreateFoundItem'
import UpdateFoundItemInfo from './components/UpdateFoundItemInfo'
import ShowFoundItemsTable from './components/ShowFoundItemsTable'

// LOST ITEM
import ShowLostItemList from './components/ShowLostItemList'
import ShowLostItemDetails from './components/ShowLostItemDetails'
import CreateLostItem from './components/CreateLostItem'
import UpdateLostItemInfo from './components/UpdateLostItemInfo'
import ShowLostItemsTable from './components/ShowLostItemsTable'

// MY ITEM
// import MyItemsList from './components/ShowFoundItemsTable'

const App = () => (
  <div>
    <LFNav />
    <div className = "container" >
      <Route exact path = "/" component = { Home } />
      <Route exaxt path = "/about" component = { About } />
      <Route exact path = "/contact" component = { Contact } />
      <Route exact path = "/faq" component = { FAQ } />
      <Route exact path = "/login" component = { Login } />
      <Route exact path = "/signup" component = { Signup } />

      <Route exact path = "/showfounditemlist" component = { ShowFoundItemList } />
      <Route exact path = '/showfounditem/:id' component = { ShowFoundItemDetails } />
      <Route exact path = "/createfounditem" component = { CreateFoundItem } />
      <Route exact path = '/editfounditem/:id' component = { UpdateFoundItemInfo } />
      <Route exact path = '/showfounditemstable' component = { ShowFoundItemsTable } />

      <Route exact path = "/showlostitemlist" component = { ShowLostItemList } />
      <Route exact path = '/showlostitem/:id' component = { ShowLostItemDetails } />
      <Route exact path = "/createlostitem" component = { CreateLostItem } />
      <Route exact path = '/editlostitem/:id' component = { UpdateLostItemInfo } />
      <Route exact path = '/showlostitemstable' component = { ShowLostItemsTable } />
    </div >
  </div>
)

render(
  <Router >
    <App />
  </Router>,
  document.getElementById('root')
)

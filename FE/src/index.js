import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import './index.css'

// import logo from "../../images/logo.gif";

import './styles/bootstrap.min.css'
// NAVIGATION
import LFNav from './components/LFNav'
// PAGES
import Home from './pages/Home/HomePage'
// import AddItem from "./pages/AddItem/AddItemPage";
// import MyData from "./pages/MydataPage/MydataPage";
// import AllLostItems from ".pages/AllLostItems/AllLostItemsPage";
// import AllLostItems from "./pages/AllLostItems/AllLostItemsPage";
// import AllFoundItems from "./pages/AllFoundItems/AllFoundItemsPage";
// import MyItems from "./pages/MyItems/MyItemsPage";

import Login from './pages/Login/LoginPage'
import Signup from './pages/Signup/SignupPage'
import About from './pages/About/AboutPage'
import Contact from './pages/Contact/ContactPage'
import FAQ from './pages/FAQ/FAQPage'

import CreateItemFound from './pages/Items/CreateItemFound'
import CreateItemLost from './pages/Items/CreateItemLost'
import ViewItem from './pages/Items/ShowItemDetails'
import ViewItemsLost from './pages/Items/ShowItemListLost'
import ViewItemsFound from './pages/Items/ShowItemListFound'

import CreateItem from './components/CreateItem'
import ShowItemList from './components/ShowItemList'
import ShowItemDetails from './components/ShowItemDetails'
import UpdateItemInfo from './components/UpdateItemInfo'

const App = () => (
  <div>
    <LFNav />
    <div className = "container" >
      <Route exact = { true } path = "/" component = { Home } />
      <Route exaxt path = "/about" component = { About } />
      <Route exact path = "/contact" component = { Contact } />
      <Route exact path = "/faq" component = { FAQ } />
      <Route exact path = "/login" component = { Login } />
      <Route exact path = "/signup" component = { Signup } />
      <Route exact path = "/createitemfound" component = { CreateItemFound } />
      <Route exact path = "/createitemlost" component = { CreateItemLost } />
      <Route exact path = "/createitem" component = { CreateItem } />
      <Route exact path = "/showitemlist" component = { ViewItem } />
      <Route exact path = "/showitemlist" component = { ViewItemsLost } />
      <Route exact path = "/showitemlist" component = { ViewItemsFound } />
      <Route exact path = '/' component = { ShowItemList } />
      <Route exact path = '/showitemlist' component = { ShowItemList } />
      <Route path = '/edititem/:id' component = { UpdateItemInfo } />
      <Route path = '/showitem/:id' component = { ShowItemDetails } />
    </div >
  </div>
)

render(
  <Router >
    <App />
  </Router>,
  document.getElementById('root')
)

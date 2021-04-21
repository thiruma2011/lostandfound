import React, { Component } from 'react'
import '../App.css'
import '../styles/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FoundItemCard from './FoundItemCard'

class ShowFoundItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      search: null
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:8082/api/founditems')
      .then(res => {
        this.setState({
          items: res.data

        })
      })
      .catch(err => {
        console.log('Error from ShowFoundItemList: ' + err.stack)
      })
  };

  searchSpace=(event) => {
    const keyword = event.target.value
    this.setState({ search: keyword })
  }

  render () {
    const items = this.state.items
    var searchkey = null
    console.log('PrintItem: ' + items)
    let itemList
    if (this.state.search != null) {
      searchkey = this.state.search.toString().toLowerCase()
    }
    if (!items) {
      itemList = 'there is no item recored!'
    } else if (searchkey == null) {
      var mitems = items
    } else {
      mitems = items.filter(function (item) {
        return item.title.toString().toLowerCase().includes(searchkey) || item.description.toString().toLowerCase().includes(searchkey) || item.category.toString().toLowerCase().includes(searchkey)
      })
    }
    itemList = mitems.map((item, k) =>

                <
                FoundItemCard item = { item }
                key = { k }
                />

    )
    return (
      <div className = "ShowFoundItemList" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-12" >
              <br />
              <h2 className = "display-4 text-center" > Found Items List </h2>
            </div>
            <div>
             <input type="text" placeholder="Keyword search" onChange={(e) => this.searchSpace(e)} />

            <div className = "col-md-11" >
              <Link to = "/createfounditem" className = "btn btn-outline-warning float-right" > +Add New Found Item </Link>
              <br />
              <br />
              <hr />
            </div>
            </div>

        </div>

        <div className = "list" > { itemList } </div>
        </div >
      </div>
    )
  }
}

export default ShowFoundItemList

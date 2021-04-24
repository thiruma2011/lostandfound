import React, { Component } from 'react'
import '../App.css'
import '../styles/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LostItemCard from './LostItemCard'

class ShowLostItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      search: null
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:8082/api/lost-items')
      .then(res => {
        this.setState({
          items: res.data

        })
      })
      .catch(err => {
        console.log('Error from ShowlostItemList: ' + err.stack)
      })
  };

  searchSpace=(event) => {
    const keyword = event.target.value
    this.setState({ search: keyword })
  }

  render () {
    const items = this.state.items
    let mitems
    let searchkey = null
    console.log('PrintItem: ' + items)
    let itemList
    if (this.state.search != null) {
      searchkey = this.state.search.toString().toLowerCase()
    }
    if (!items) {
      itemList = 'there is no item recored!'
    } else if (searchkey == null) {
      mitems = items
    } else {
      mitems = items.filter(function (item) {
        return (item.title && item.title.toString().toLowerCase().includes(searchkey)) ||
          (item.description && item.description.toString().toLowerCase().includes(searchkey)) ||
          (item.category && item.category.toString().toLowerCase().includes(searchkey))
      })
    }
    itemList = mitems.map((item, k) =>

                <
                LostItemCard item = { item }
                key = { k }
                />

    )
    return (
      <div className = "ShowLostItemList" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-12" >
              <br />
              <h2 className = "display-4 text-center" > Lost Items List </h2>
            </div>
            <div>
             <input type="text" placeholder="Keyword search" onChange={(e) => this.searchSpace(e)} />

            <div className = "col-md-11" >
              <Link to = "/createlostitem" className = "btn btn-outline-warning float-right" > +Add New Lost Item </Link>
              <br />
              <br />
              <hr />
            </div>
            </div>

        </div>

        <div className = "list" > { itemList } </div>
        <h6> Number of Items {mitems.length} </h6>
        </div >
      </div>
    )
  }
}

export default ShowLostItemList

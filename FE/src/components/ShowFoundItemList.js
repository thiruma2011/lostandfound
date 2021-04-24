import React, { Component } from 'react'
import '../App.css'
// import './Page.css'
import '../styles/bootstrap.min.css'
import { Link } from 'react-router-dom'
import FoundItemCard from './FoundItemCard'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

class ShowFoundItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      mitems: [],
      pageNumber: 0,
      itemsPerPage: 6,
      pagesVisited: 0,
      search: null
    }
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount () {
    axios
      .get('http://localhost:8082/api/found-items')
      .then(res => {
        this.setState({
          items: res.data,
          mitems: res.data
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

  changePage = ({ selected }) => {
    this.setState({ pageNumber: selected })
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
    const pageCount = Math.ceil(mitems.length / this.state.itemsPerPage)
    const mstart = this.state.pageNumber * this.state.itemsPerPage
    const mend = mstart + this.state.itemsPerPage
    itemList = mitems
      .slice(mstart, mend)
      .map((item, k) =>
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
        <div className = "list" > { itemList }
           <br></br><div>
        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={this.changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      /></div>
      <h6> Number of Items {this.state.mitems.length} </h6>

      </div>
        </div >
      </div>
    )
  }
}

export default ShowFoundItemList

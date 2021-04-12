import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/bootstrap.min.css'

// import logo from '../images/logo.gif'

const LostItemCard = (props) => {
  const item = props.item
  return (
    <div className = "card mb-4" >
      <img src = "" alt = "" />
      <div className = "card-body" >
        <h2><Link to = { `/showfounditem/${item.id}` } > { item.title } </Link> </h2>
        <p> { item.description } </p>
        <p> { item.status } </p>
        <p> { item.timestamp } </p>
      </div>
    </div>
  )
}

LostItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    timestamp: PropTypes.timestamp
  }).isRequired
}

export default LostItemCard

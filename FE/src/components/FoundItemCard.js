import React from 'react'
import PropTypes from 'prop-types'
// import Container from 'react-bootstrap/Container'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/bootstrap.min.css'

// import logo from '../images/logo.gif'

const FoundItemCard = (props) => {
  const item = props.item
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= { item.images } />
    <Card.Body>
    <Card.Title> <h4><Link to = { `/showfounditem/${item.id}` } > { item.title } </Link> </h4> </Card.Title>
    <Card.Text>
    {item.description}
    </Card.Text>
    </Card.Body>
    <Card.Body>
    <Card.Link href={ '/showlostitemstable/' }> Possible Matching Items</Card.Link>
    </Card.Body>
</Card>
  )
}

FoundItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.any,
    status: PropTypes.string,
    timestamp: PropTypes.timestamp
  }).isRequired
}

export default FoundItemCard

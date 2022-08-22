import { useState, useEffect } from "react"
import axios from "axios"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

const AllProperties = () => {

  const [ allProps, setAllProps ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://project3-earthbnb.herokuapp.com/all-properties')
        setAllProps(data)

      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  console.log(allProps)

  return (
    <Container as='main'>
      <Row>
        {allProps.map(property => {
          const { _id, name, type, price } = property
          console.log(property)
          return (
            <Col key={_id}>
              <Link to={`/allproperties/${_id}`}>
                <Card>
                  <Card.Body>
                    <Card.Title className="card-title">{name}, {type} - {price}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}

      </Row>
    </Container>
  )
}

export default AllProperties
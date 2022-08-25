import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Row, Col, Container, Card } from "react-bootstrap"
import { Box } from "@mui/system"
import { LinearProgress } from "@mui/material"
import { API_URL } from "../config"

const UserProfile = () => {
  //when coming back to page, scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  //get all properties
  const [userData, setUserData] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/user-profile`)
        setUserData(data)
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }
    }
    getData()
  }, [])

  const { userName, reviews, myProperties } = userData
  console.log(myProperties, reviews, userName)


  return (
    <>
      {
        myProperties && reviews ?
          <>
            <h1>Welcome <span>{userName}</span>!</h1>
            <Container as='main' className="user-property">
              <Row>
                <h3>Your properties:</h3>

                {myProperties.length > 0
                  ?
                  myProperties.map(property => {
                    const { _id, name, type, price, images } = property
                    return (
                      <Col key={_id} md='4' className="mb-5">
                        <Link to={`/properties/${_id}`}>
                          <Card className="property-card">
                            <Card.Body>
                              <img className="prop-car-img" loading="lazy" src={images[0]} alt={name} />
                              <Card.Title className="card-title">{name}, {type} - {price}</Card.Title>
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                    )
                  })
                  :
                  <div>You don't have any properties listed</div>
                }
                <Link className="user-page-btn navigatebtn" as="btn" to="/add-property" >Add a property</Link>
              </Row>
            </Container>

            <Container as='main'>
              <Row>
                <h3>Your reviews:</h3>
                {reviews.length > 0
                  ?
                  reviews.map(review => {
                    const { _id, title, text, rating, propertyId } = review
                    return (
                      <Col key={_id} md='6' className="mb-5">
                        <Card className="review-card">
                          <Card.Body >
                            <Card.Title className="card-title">{'⭐️'.repeat(rating)} - {title}</Card.Title>
                            <Card.Text>{text}
                              <br /><br />
                              {propertyId && <>
                                <Link className="user-page-btn navigatebtn-spaced" as="link" to={`/properties/${propertyId}`}>Visit the Property</Link>
                                <Link className="user-page-btn navigatebtn-spaced" as="link" to={`/review-update/${propertyId}/${_id}/`}>Edit the Review</Link>
                              </>}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })
                  :
                  <div>No reviews yet</div>
                }
              </Row>
            </Container>
          </>
          :
          <>
            {error ?
              <Box className="errorbox">
                {/* <div className='error-mex'>{error}</div>  */}
                <h2>Please log in to see your profile</h2>
                <Link className="user-page-btn navigatebtn " as="btn" to="/login" >Go to log in </Link>
                < br />
              </Box>
              :
              <div className="loading-bar"> <br /> <LinearProgress color="success" /> </div>}
          </>
      }
      {/* <Link className="user-page-btn navigatebtn" as="btn" to="/" >Back to Home</Link> */}
    </>
  )
}


export default UserProfile
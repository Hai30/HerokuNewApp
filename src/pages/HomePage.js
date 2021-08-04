import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'


import useGeolocation from '../components/hooks/useGeolocation'

const HomePage = () => {
  const geolocationPosition = useGeolocation()

  const dispatch = useDispatch()

  
  return (
    <>
      <Row className='justify-content-center text-center mx-auto mb-5'>
        <Col md='auto'>
        </Col>
      </Row>
    
    </>
  )
}

export default HomePage

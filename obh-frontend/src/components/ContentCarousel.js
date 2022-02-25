import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {setCurrentShow, clearCurrentShow} from '../actions/contentActions'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ContentCarousel = (props) => {


  let navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleRedirect = (event)=>{
    props.clearCurrentShow()
    console.log("Im clicked!", event.target.value)
    let id = event.target.value
    let show = props.media.find((show)=> show.id === id)
    console.log(show)
    props.setCurrentShow(show)
    navigate(`/show/${show.id}`)
   }

  return (
    <Container width="25%">
      <Row className="justify-content-sm-center">
        <Col md={{ span: 6, offset: 0 }}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.rC1.attributes.poster}
          alt="First slide"

        />

        <Carousel.Caption>

          <Button onClick={handleRedirect} value={props.rC1.id} variant="outline-secondary">{props.rC1.attributes.title}</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"

          src={props.rC2.attributes.poster}
          alt="Second slide"
        />

        <Carousel.Caption>

        <Button onClick={handleRedirect} value={props.rC2.id} variant="outline-secondary">{props.rC2.attributes.title}</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.rC3.attributes.poster}
          alt="Third slide"
        />

        <Carousel.Caption>
      
        <Button onClick={handleRedirect} value={props.rC3.id} variant="outline-secondary">{props.rC3.attributes.title}</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
  </Container>
  );
}

export default connect(null, {setCurrentShow, clearCurrentShow})(ContentCarousel)

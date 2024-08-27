import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {Link}  from 'react-router-dom';

function Landing() {
  return (
    <>
    <Row className='w-100 mt-5 d-flex justify-content-center align-item-center ps-4'>
      <Col md={1}></Col>
      <Col md={5} className='p-3'>
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque architecto accusamus consequatur velit distinctio dolorem unde ipsum sunt illum? Illum, esse optio deserunt vel a ipsam. Laboriosam explicabo atque dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas autem tempora, obcaecati, eveniet modi aliquam corrupti consequatur totam facilis ex voluptates accusamus, sint error animi reprehenderit. Doloribus, sed qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit voluptates beatae corporis fuga quas laboriosam! Velit numquam aliquid possimus cum nihil rem alias nulla recusandae, ab amet sint rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus beatae maiores soluta autem delectus assumenda dolorum quibusdam esse culpa at sapiente obcaecati ducimus magnam pariatur harum, alias repellat exercitationem?
        </p>
      <button className='btn btn-warning mt-5'><Link to= {'/home'}>Get Started</Link></button>

      </Col>
      <Col md={1}></Col>
      <Col md={5} className='d-flex justify-content-center align-item-center p-5'>
      <img src='https://gifdb.com/images/high/dj-playing-on-spotlight-animation-d9b4kbbcrxfhaqmu.gif' alt='no image' className='w-100'/>

      </Col>
    </Row>

<div className="container">
        <h3 className="text-center my-5">Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: "100%" }} className="p-3 mt-3">
              <Card.Img
                variant="top"
                src="https://i.makeagif.com/media/6-22-2017/FPvzmi.gif" height={'300px'}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="px-md-5">
            <Card style={{ width: "100%" }} className="p-3 mt-3">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif" height={'300px'}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: "100%" }} className="p-3 mt-3">
              <Card.Img variant="top" src="https://i.makeagif.com/media/4-01-2021/FmAQ75.gif" height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
            <div className='row p-4'>
              <div className="col-md-6">
                <h3 className='text-warning'>Simple fast and powerful</h3>
                <p className='mt-5'><span className='fs-5'>play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt eos corrupti ratione voluptas, debitis veritatis quaerat quibusdam quia aliquid minus quasi eaque assumenda praesentium quidem.</p>
                <p className='mt-5'><span className='fs-5'>play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt eos corrupti ratione voluptas, debitis veritatis quaerat quibusdam quia aliquid minus quasi eaque assumenda praesentium quidem.</p>
                <p className='mt-5'><span className='fs-5'>play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt eos corrupti ratione voluptas, debitis veritatis quaerat quibusdam quia aliquid minus quasi eaque assumenda praesentium quidem.</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="500px" src="https://www.youtube.com/embed/WRVPV5MkC8s?list=RDWRVPV5MkC8s" title="Sundariye Vaa | Evergreen Malayalam Album Song | Chembakame | Franco" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

    </>
  )
}
export default Landing

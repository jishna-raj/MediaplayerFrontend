import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deleteVideoApi } from '../services/allApi';


function Videocard({video,setDeleteVideoStatus,isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);

    const caption = video?.caption
    const url = video?.embededLink
    const time = new Date()
    /* console.log(time); */

    const timeStamp = new Intl.DateTimeFormat("en-GB", { year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"}).format(time)

      console.log(timeStamp);

      const reqBody = {
        caption,url,timeStamp
      }
  
  
    const result = await addVideoHistory(reqBody)
    console.log(result);
  
  }



  const handleDelete = async(id) =>{
    const result = await deleteVideoApi(id)
    setDeleteVideoStatus(result.data)

  };

  const videoDrag = (e , video)=>{
    /* console.log(typeof(id)); */
    console.log(video); //dragged video is an object
    /* console.log(`Dragged video details is ${video}`); */
     e.dataTransfer.setData("videoDetails",JSON.stringify(video))
  }
  

  return (
    <>
      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag (e,video)}>
      {!isPresent&&<Card.Img variant="top" onClick= {handleShow} src= {video?.imageUrl} />}
      <Card.Body>
        
        <div className='d-flex justify-content-between'>
        <Card.Title style={{fontSize:'20px'}}>{video?.caption}</Card.Title>
        {!isPresent&&<Button variant="danger" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrash} /></Button>}
        </div>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="300px" src= {`${video?.embededLink}?autoplay=1`} title="Charlie | Pularikalo Song Video | Dulquer Salmaan, Parvathy | Official" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>

      
    </>
  )
}

export default Videocard
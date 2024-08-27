import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp , faFilm } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../services/allApi';

function Add({setAddVideoStatus}) {

  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption:"",
    imageUrl:"",
    embededLink:""
  });
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getLink = (e) => {
    const link = e.target.value;

    if (link.startsWith('https://youtu.be/')) {
      setVideoDetails({ ...videoDetails, embededLink: `https://www.youtube.com/embed/${link.slice(17, 28)}` }); // Adjusted slice to get correct video ID
    } else {

      setVideoDetails({ ...videoDetails, embededLink: `https://www.youtube.com/embed/${link. link.slice(-11) }`});
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const result = await allVideoApi(videoDetails); // Assuming allVideoApi is an asynchronous function you want to await

    if(result.status>=200 && result.status<=300){
        alert('video added successfully')
        handleClose()
        setAddVideoStatus(result.data)
    }
    else{
        alert('something went wrong')
        console.log(result);
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button className='btn fs-5' onClick={handleShow}>
          <FontAwesomeIcon icon={faCloudArrowUp} />
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>
            <FontAwesomeIcon icon={faFilm} className='me-3 text-warning' />Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded'>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='Video Caption'
                className='form-control'
                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='Video Image URL'
                className='form-control'
                onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <input
                type='text'
                placeholder='YouTube Video URL'
                className='form-control'
                onChange={(e) => getLink(e)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;

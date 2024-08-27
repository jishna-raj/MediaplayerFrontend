import React, { useEffect, useState } from 'react'
import VideoCard from "./Videocard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({ dragOut }) {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };

  const handleShow = () => setShow(true);

  const handleCategoryAdd = async () => {
    if (CategoryName) {
      const reqBody = {
        CategoryName,
        allVideo: []
      };

      try {
        const result = await addCategoryApi(reqBody);
        if (result.status >= 200 && result.status < 300) {
          setCategoryName("");
          handleClose();
        toast.success('Category added successfully');
          setAddStatus(true);
        }
      } catch (error) {
        console.error("Error adding category:", error);
        toast.error('Failed to add category');
      }
    } else {
      toast.info('Please add a category name');
    }
  };

  const getCategory = async () => {
    try {
      const result = await getAllCategoryApi();
      setAllCategory(result.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategoryApi(id);
      getCategory();
      setAddStatus(true);
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.info('Failed to delete category');
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));

    const category = allCategory.find(cat => cat.id === categoryId);

    if (!category) {
      toast.error('Category not found');
      return;
    }

    if (category.allVideo.find((item) => item.id === vDetails.id)) {
      toast.info("Video already exists in the category");
    } else {
      category.allVideo.push(vDetails);
      try {
        const result = await updateCategoryApi(category.id, category);
        if (result.status >= 200 && result.status < 300) {
          toast.success("Video added successfully");
          setUpdateStatus(true);
        }
      } catch (error) {
        console.error("Error updating category:", error);
        toast.error('Failed to add video to category');
      }
    }
  };

  const ondrag = (e, videoId, categoryDetails) => {
    const dataShare = {
      videoId, categoryDetails
    };
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare));
  };

  useEffect(() => {
    setAddStatus(false);
    setUpdateStatus(false);
    getCategory();
  }, [addStatus, updateStatus, dragOut]);

  return (
    <>
      <h5 className='mt-5 mt-md-0'>Category</h5>
      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}> Add Category</button>

      {allCategory?.length > 0 ? allCategory.map((item) => (
        <div
          key={item.id}
          className='p-3 border rounded mt-4'
          onDragOver={dragOver}
          onDrop={(e) => videoDrop(e, item.id)}
        >
          <div className='d-flex justify-content-between'>
            <p className='mb-4'>{item.CategoryName}</p>
            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
          {item.allVideo?.length > 0 ? item.allVideo.map((video) => (
            <div
              key={video.id}
              draggable
              onDragStart={(e) => ondrag(e, video.id, item)}
            >
              <VideoCard video={video} isPresent={true} />
            </div>
          )) : null}
        </div>
      )) : <p>No category added yet</p>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input
              type='text'
              className='form-control'
              placeholder='Category Name'
              value={CategoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="warning" onClick={handleCategoryAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-centered' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category;

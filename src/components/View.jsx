import React, { useEffect, useState } from 'react'
import VideoCard from "./Videocard";
import { getAllVideoApi, updateCategoryApi } from '../services/allApi';


function View({ addVideoStatus, setDragOut }) {

  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState([])



  const getAllVideo = async () => {
    const result = await getAllVideoApi()
    /* console.log(result); */
    setAllVideo(result.data)

  }
  console.log(allVideo);

  const dragOver = (e) => {
    e.preventDefault()
  }

  const videoDrop = async (e) => {
    const result = JSON.parse(e.dataTransfer.getData("dataShare"))

    console.log(result);

    const selectedCategory = result.categoryDetails

    const newDetails = selectedCategory.allVideo.filter((item) => item.id !== result.videoId)
    console.log(newDetails);


    const reqBody = {
      CategoryName : selectedCategory.CategoryName,
      allVideo:newDetails,
      id:selectedCategory.id
    }
    const id = selectedCategory.id

    const response = await updateCategoryApi(id,reqBody)
    console.log(response);

    if(response.status>=200&&response.status<300){
      setDragOut(true)
    }
    

  }

  useEffect(() => {
    getAllVideo()
  }, [addVideoStatus, deleteVideoStatus])


  // dependencies
  //1.no dependency : call useEffect function everytime
  //2.[] empty array : call useEffect fn when the page render
  //3.[state,props] : call useEffect on first render and also the value of state and props changes.
  return (

    <>
      <div className='row w-100' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e)}>
        <h4>All Videos</h4>


        {allVideo ?
          allVideo?.map((item) => (<div className="col-md-3 mt-4">
            <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
          </div>))
          :
          <p className='text-danger fs-5'>nothing to display</p>

        }

      </div>

    </>
  )
}


export default View
// API to add videos

import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const allVideoApi=async(reqBody)=>{
   return await commonApi("POST",`${serverUrl}/allVideo`,reqBody)
}


// API to get all videos

export const getAllVideoApi = async()=>{
   return await commonApi("GET",`${serverUrl}/allVideo`,"")

}

//API to delete a video

export const deleteVideoApi = async(id)=>{
   return await commonApi("DELETE",`${serverUrl}/allVideo/${id}`,{})

}

//API to add video to watch history

export const addVideoHistory = async(reqBody)=>{
   return await commonApi("POST",`${serverUrl}/history`,reqBody)
}

//API to get all videos from history

export const getVideoHistoryApi = async() =>{
   return await commonApi("GET",`${serverUrl}/history`,"")
}

//API to delete a video from history

export const deleteVideoHistoryApi = async(id) =>{
   return await commonApi("DELETE" , `${serverUrl}/history/${id}`,{})
}

//Api to add category

export const addCategoryApi = async(reqBody) =>{
   return await commonApi("POST" , `${serverUrl}/category`,reqBody)
}

//api to get all categories

export const getAllCategoryApi = async()=>{
   return await commonApi("GET" , `${serverUrl}/category`)
}

//Api to Delete categories

export const deleteCategoryApi = async(id) => {
   return await commonApi ("DELETE" , `${serverUrl}/category/${id}`,{})
}

//api to update category

export const updateCategoryApi = async(id,reqBody) => {
   return await commonApi ("PUT" , `${serverUrl}/category/${id}`,reqBody)
}
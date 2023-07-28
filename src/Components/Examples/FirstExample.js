import React, { useEffect } from 'react'
import axios from 'axios'
const url="https://course-api.com/react-tours-project"
function FirstExample() {
    const fetchData=async()=> {
        try {
            const response=await axios(url)            
            const data=response.data;
            console.log(data);            
       
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        fetchData()},[]
        )
  return (
    <>
            <div>
                <h1>First Example</h1>
            </div>
    </>
  )
}
export default FirstExample
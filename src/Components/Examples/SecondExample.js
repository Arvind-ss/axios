import React, { useState } from 'react'
import axios from 'axios';
const url="https://icanhazdadjoke.com/";
const SecondExample = () => {
    const [joke,setJoke]=useState("Random Joke")
    const fetchJoke=async ()=>{
        try {
            const data = await axios(url,{
                headers:{
                    Accept:'application/json',
            },
        })
        
        const response=data.data
        const joke=response.joke
        setJoke(joke)
        // console.log(joke);
        } catch (error) {
            
        }
    }
  return (
    <>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>

        <h1>Second Example</h1>

        <button style={{width:"110px",height:"30px"}}onClick={fetchJoke} >Generate Joke</button>
        <p>{joke}</p>
        </div>
    </>
  )
}

export default SecondExample
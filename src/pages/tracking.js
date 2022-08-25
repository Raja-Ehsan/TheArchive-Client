import React, { useState } from 'react'
import Footer from '../components/footer'
import Lower from '../components/lower-nav'
import Nav from '../components/nav'

export const Tracking = () => {
    const [id,setId]=useState();
    const [status,setStatus]=useState();
    function fetchstatus(){
        fetch(`http://localhost:1000/order/getStatus/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status){
                if(res.status==='Pending')
                setStatus("You order is being Processed")
                else if(res.status==='Approved')
                setStatus("You order is on its way")
            }
            else{
                setStatus("No Order Found")
            }
        })
    }
  return (
    <>
    <Nav/>
    <div className='ty' style={{height:'74.5vh'}}>
        <div className="thanks" style={{padding:'20px',width:'320px',backgroundColor:'grey'}}>
                <h1 style={{color:'black'}}>Track Your Order</h1>
                <input onKeyPress={(e) => { if (e.key === 'Enter') fetchstatus()  }} onChange={((e)=>{setId(e.target.value)}) }type="text" name="id" id="" placeholder='Enter Your Tracking Id' />
                <h4 style={{color:'black'}}>{status}</h4>
        </div>
    </div>
    
    <Footer/>
    <Lower/>
    </>
  )
}

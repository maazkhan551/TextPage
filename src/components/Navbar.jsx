import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
export default function Navbar(props) {
  return (
    <>
      <div className= {`h-16 flex ${props.mode==="red"?"bg-[#660B05]":props.mode==="blue"?"bg-[#1A2A80] ":props.mode==="green"?"bg-[#08CB00]":props.mode==="black"?"bg-[#393E46]":"bg-amber-100"}`}>
          <ul className='font-bold flex gap-11'>
            <li className='m-2 rounded-2xl h-[30px] w-[200px] grid place-items-center'></li>
            <li className='bg-yellow-50 m-2 rounded-2xl h-[40px] w-[400px] grid place-items-center'><input type="text" placeholder='Search our brands items' className='text-black font-light'/></li>
            <li className='m-2 rounded-2xl h-[30px] w-[200px] grid place-items-center'>{props.Name}</li>
            <li className='m-2 rounded-2xl h-[30px] w-[200px] grid place-items-center'><Link to="/Aboutus">About Us</Link></li>
          </ul>
          <div className="colorThemes flex mt-2.5">
            <div className="red rounded-[50%] bg-red-600 h-[30px] w-[30px] ml-1" onClick={()=>props.toggleMode("red")}> </div>
            <div className="blue rounded-[50%] bg-blue-600 h-[30px] w-[30px] ml-1" onClick={()=>props.toggleMode("blue")}></div>
            <div className="green rounded-[50%] bg-green-600 h-[30px] w-[30px] ml-1" onClick={()=>props.toggleMode("green")}></div>
            <div className="black rounded-[50%] bg-black h-[30px] w-[30px] ml-1" onClick={()=>props.toggleMode("black")}></div>
          </div>


       </div>
      </>
  )
}
Navbar.PropTypes = {Name: PropTypes.string.isRequired,
                    about: PropTypes.string.isRequired,
                    devName: PropTypes.string.isRequired,
}

import React,{useState} from 'react'

export default function about(props) {
  const [btnText,setBtnText] = useState("Enable light mode")
 
  const [visible,isVisible] = useState(false)
  const [con2V,setcon2] = useState(false)
  const myColor = {
    color: props.mode == "white" ? "black" : "white",
    backgroundColor: props.mode
  }
  return (
    <div className='w-[700px] mx-auto my-20 border-[#333446] border-2' style={myColor}>
      <h1 className="text-gray-600 text-center text font-bold" style={myColor}>About us</h1>
      <div className="container1 w-[500px] mx-auto my-2">
        <h2 className='cursor-pointer font-bold border-[#EAE4D5] border-2 p-2' onClick={()=>isVisible(!visible)}>Conatiner 1</h2>
        {visible &&(
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nobis pariatur rem labore vitae esse eum libero nihil, provident itaque asperiores rerum beatae ratione totam sint. Illum illo adipisci error nulla libero expedita voluptate cumque aperiam ratione recusandae, culpa, minima quidem nam voluptatem, voluptatibus nobis tenetur sunt repellat laboriosam sit.</p>
        )}
      </div>
      <div className="container2 container1 w-[500px] mx-auto">
        <h2 className='my-2 cursor-pointer  font-bold border-[#EAE4D5] border-2 p-1.5' onClick={()=>setcon2(!con2V)}>Conatiner 2</h2>
        {con2V &&(
          <div className='my-2'>
            <p>
              Maaz Ahmad software enginner and full stack AI developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, illo consequuntur voluptatum mollitia fuga similique tempora veritatis in aut ab?
            </p>
          </div>
          )
        }
      </div>
      <button className='bg-blue-900 mx-20 mb-10 rounded-2xl w-[150px]' >{btnText}</button>
    </div>
  )
}

import React, { useState } from 'react'

function Alert(props) {
  const [show,setShow] = useState(false);
  if (show) return null;
  return (
        <div style = {{height :"50px"}}>
        {props.alert &&  <div id="alert-3" className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-medium">
             {props.alert.t}: {props.alert.msg}
          </div>  
        </div>}
        </div>
  )
}

export default Alert

import React,{useState} from 'react'
export default function Textform(props) {
  const changeUpper = ()=>{
    let newText = text.toUpperCase()
    upperText(newText)
    props.showAlert("Converted to upperCase","Success");
  }
  const handelOnChanhge = (event)=>{
    upperText(event.target.value)
  }
  const changeLower = ()=>{
    let newText = text.toLowerCase()
    upperText(newText)
    props.showAlert("Converted to Lower Case","Success");
  }
  const clear = ()=>{
    let newText = ''
    upperText(newText)
    props.showAlert("Text cleared","Success");
  }
  const copyText = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Copied text","Success");
  }
  const sentenceCase = ()=>{
       let textArray = text.split(" ");
       let newText = "";
       for(let i=0;i<textArray.length;i++){
        let tempText = textArray[i].charAt(0).toUpperCase()+textArray[i].slice(1).toLowerCase();
        newText += tempText;
        newText += " ";
       }
       upperText(newText);
       props.showAlert("Converted to Capitialized Case","Success");
  }
  const [text,upperText] = useState("")
  return (
     <> 
     <div className="container w-[600px] mx-auto" style={{color: props.mode == "black" ? "white":"black"}}>
     <h1 className='text-2xl font-bold text-center m-[20px]'>{props.contact}</h1>
     <div className="grid place-items-center">
      <textarea name="message" id="message" rows={8} cols={100} value = {text}className=' border-2'  onChange={handelOnChanhge}></textarea>
     </div>
     <button disabled = {text.length===0} className={`${props.mode==="red"?"bg-[#660B05]":props.mode==="blue"?"bg-[#1A2A80]":props.mode==="green"?"bg-[#08CB00]":props.mode==="black"?"bg-[#393E46]":"bg-amber-100"} rounded-[5%] ml-[5px] mt-7 h-[30px] w-[200px]`}onClick={changeUpper}>Convert to upper case</button>
     <button disabled = {text.length===0} className={`${props.mode==="red"?"bg-[#660B05]":props.mode==="blue"?"bg-[#1A2A80]":props.mode==="green"?"bg-[#08CB00]":props.mode==="black"?"bg-[#393E46]":"bg-amber-100"} rounded-[5%] ml-[10px] mt-7 h-[30px] w-[200px]`} onClick={changeLower}>Convert to Lower case</button>
     <button disabled = {text.length===0} className={`${props.mode==="red"?"bg-[#660B05]":props.mode==="blue"?"bg-[#1A2A80]":props.mode==="green"?"bg-[#08CB00]":props.mode==="black"?"bg-[#393E46]":"bg-amber-100"} rounded-[5%] ml-[10px] mt-7 h-[30px] w-[150px]`} onClick={clear}>Clear Text</button>
     <button disabled = {text.length===0} className={`${props.mode==="red"?"bg-[#660B05]":props.mode==="blue"?"bg-[#1A2A80]":props.mode==="green"?"bg-[#08CB00]":props.mode==="black"?"bg-[#393E46]":"bg-amber-100"} rounded-[5%] ml-[10px] mt-7 h-[30px] w-[200px]`} onClick={sentenceCase}>Capitailize case</button>
      <button disabled = {text.length===0} className={`${props.mode==="red"?"bg-[#660B05]":props.mode==="blue"?"bg-[#1A2A80]":props.mode==="green"?"bg-[#08CB00]":props.mode==="black"?"bg-[#393E46]":"bg-amber-100"} rounded-[5%] ml-[10px] mt-7 h-[30px] w-[200px]`} onClick={copyText}>Copy text</button>
     </div>
     <div className="container2 grid place-items-center m-3" style={{color: props.mode == "white"?"black":"white"}}>
      <h2>Text Summary</h2>
      <p>Words: {text.split(" ").filter((e)=>{return e.length!=0}).length}, characters:{text.length}</p>
      <h3>Preview</h3>
      <p>{text}</p>
     </div>
     </>
  )
}

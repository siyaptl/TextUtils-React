import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Textutil(props) {
    const clickHandlerup=()=>{
        setText(text.toUpperCase())
        props.alertmsg("Converted to Uppercase!" , "success")
    }
    const clickHandlerlw=()=>{
      setText(text.toLowerCase())
      props.alertmsg("Converted to Lowercase!" , "success")
  }
  const clear=()=>{
    setText("")
    props.alertmsg("Textbox cleared!" , "success")
}
    const changeHandler=(evt)=>{
        setText(evt.target.value)
    }
    const handlecopy = () => {
      navigator.clipboard.writeText(text)
      // document.getSelection().removeAllRanges()
      props.alertmsg("Text Copied!" , "success")
    }
    const handlespaces = () => {
      let newtext = text.split(/[ ]+/g)
      setText(newtext.join(" "))
      props.alertmsg("Extra spaces removed!" , "success")
    }
    const [text, setText] = useState("")
  return (
    <div className={`w-full flex justify-center mt-9`}>
    <div className='w-full max-w-[901px] space-y-3 pb-3' style={props.textmode}>
    <div className={`text-3xl font-bold ml-3 mt-3`}>
    Enter some text to analyse
    </div>
    <div className='row mx-3 '>
      <TextField value={text} onChange={changeHandler} multiline rows={5} label="Type here" variant="outlined" className="w-full rounded-md mb-3" 
      InputProps={{ style: { ...props.dmode } }} InputLabelProps={{ style: { ...props.dmode } }} />
    </div>
    <div>
    <Button disabled={text.length===0} className='mr-3 ml-3 border border-solid border-black'  style={props.dmode} variant="contained" onClick={clickHandlerup}>Click for UpperCase</Button>
    <Button disabled={text.length===0} className='mr-3 border border-solid border-black'  style={props.dmode} variant="contained" onClick={clickHandlerlw}>Click for Lowercase</Button>
    <Button disabled={text.length===0} className='mr-3 border border-solid border-black' variant="contained"  style={props.dmode} onClick={clear}>clear</Button>
    <Button disabled={text.length===0} className='mr-3 border border-solid border-black' variant="contained"  style={props.dmode} onClick={handlecopy}>Copy text</Button>
    <Button disabled={text.length===0} className='mr-3 border border-solid border-black'  style={props.dmode} variant="contained" onClick={handlespaces}>remove extra spaces</Button>
    </div>
    <div className='container flex gap-3 ml-3'>
    <h1 className='text-1xl mt-3 font-bold text-amber-950 underline' style={props.textmode}>Your Text Summary :</h1>
    <p className=' text-1xl mt-3 font-extrabold 
   text-transparent bg-clip-text ml-3' style={props.textmode}>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
    </div>
    <p className='text-orange-990 ml-3'>
      It takes <span className='font-bold underline'> {(text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length)*0.08} Minutes </span> to read
    </p>
    <p className='ml-3 mb-3 font-bold text-amber-950 underline' style={props.textmode}>
      Preview
    </p>
    <pre className='overflow-auto outline p-4 mx-3' style={props.dmode}> {text.length>0?text:'Nothing to peview'} </pre>
    </div>
    </div>
  )
}
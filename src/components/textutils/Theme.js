import React, {useState} from 'react'
import Navbar from './Navbar'
import Textutil from './Textutil'
import About from './About'
import { Navigate } from 'react-router-dom'
import Alert from './Alert'
import {
  BrowserRouter as Router,  
  Routes,
  Route,
} from "react-router-dom";

export default function Theme() {
  const [alert, setalert] = useState(null)
  const alertmsg = (msg , type) =>{
      setalert({
          msg : msg,
          type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

    const [textmode , settextmode] = useState(
      {
        color : "#282828",
        backgroundColor : "white"
      }
    )
    const [mode, setmode] = useState(
      {
        color : "#282828",
        backgroundColor : "white"
      }
      )

      const toggle = (cls) => {
        alertmsg("Mode changed!","success")

        if(cls==='red'){
        document.body.style.backgroundColor = '#E57373'
        settextmode({
          color:'#FFF3E0',
          backgroundColor : '#A52A2A '
        })
        setmode({
          color : '#323232' ,
          backgroundColor : '#FFF3E0'
        })
      }

        if(cls==='blue'){
        document.body.style.backgroundColor = '#DCEEFF'
        settextmode({
          color:'whitesmoke',
          backgroundColor : '#1B2A49'
        })
        setmode({
          color : 'black' ,
          backgroundColor : '#E0F7FA'
        })
      }

        if(cls==='black'){
        document.body.style.backgroundColor = '#D3D3D3'
        settextmode({
          color:'#FFF3E0',
          backgroundColor : '#333333'
        })
        setmode({
          color : '#323232' ,
          backgroundColor : '#C0C0C0'
        })
      }

        if(cls==='white'){
        document.body.style.backgroundColor = 'white'
        settextmode({
          color : "#282828",
          backgroundColor : "whitesmoke"
        })
        setmode({
          color : "#282828",
          backgroundColor : "whitesmoke"
        })
      }
      }
      
      // }
  
    return (
      <>
      <Router>
        <Navbar dmode={mode} textmode={textmode} toggle={toggle} />
        <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<Textutil alertmsg={alertmsg} dmode={mode} textmode={textmode} />} />
          <Route exact path="/about" element={<About dmode={mode} textmode={textmode}/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Textutil alertmsg={alertmsg} dmode={mode} textmode={textmode}/> */}
        {/* <About dmode={mode} textmode={textmode}/> */}
        </div>
        </Router>
      </>
    )
}

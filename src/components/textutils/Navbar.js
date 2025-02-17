import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SwatchIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div style={props.textmode}>
      <Toolbar >
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TEXTUTILS
        </Typography>

        {/* Navbar Buttons */}
        <Button color="inherit" component={Link} to='/'>Home</Button>
        <Button color="inherit" component={Link} to='/about'>About</Button>
        {/* <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button> */}
        <span className='mr-3 ml-32'><strong>Color Themes</strong></span>
        <div className="p-3 mr-1 rounded-full bg-[#c45f40] text-[#A8DADC] cursor-pointer">
            <SwatchIcon className="w-6 h-6" onClick={()=>{props.toggle('red')}} />
          </div>
          <div className="p-3 rounded-full bg-[#0A192F] text-[#A8DADC] cursor-pointer">
            <SwatchIcon className="w-6 h-6" onClick={()=>{props.toggle('blue')}} />
          </div>
          <div className="p-3 ml-1 rounded-full bg-black text-white cursor-pointer hover:bg-[#233554] transition" onClick={()=>{props.toggle('black')}}>
            <SwatchIcon className="w-6 h-6 text-white" />
          </div>
          <div className="p-3 mr-1 ml-1 rounded-full bg-[#e3e2e1] text-[#212424] cursor-pointer">
            <SwatchIcon className="w-6 h-6" onClick={()=>{props.toggle('white')}} />
          </div>
        </Toolbar>
    </div>
  );
}

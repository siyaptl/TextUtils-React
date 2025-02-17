import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About(props) {
  return (
    <div className='flex justify-center items-center w-full h-scree mt-7'>
        <div className='w-full max-w-[901px] my-5'>
        <h1 className="text-4xl font-bold mb-5">About Us</h1>
        <Accordion style={props.dmode} className=' border-2 border-gray-300 mb-1'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Typography component="span"><strong>Analyze your text</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
            You can easily analyze your text.
            </AccordionDetails>
        </Accordion>
        <Accordion style={props.dmode} className=' border-2 border-gray-300 mb-1'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header" 
            >
            <Typography component="span"><strong>Free to use</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
            This is a free utility which can be used by every user.
            </AccordionDetails>
        </Accordion >
        <Accordion style={props.dmode} className=' border-2 border-gray-300'>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            >
            <Typography component="span"><strong>Browser Compatible</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
            Compatibility is a plus point.
            </AccordionDetails>
        </Accordion>
    </div>
    </div>
  );
}

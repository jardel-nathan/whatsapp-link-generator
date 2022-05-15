import React from "react";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { SwitchContext } from "./input";
const MaterialUISwitch = styled(Switch)(() => ({
 width: 62,
 height: 34,
 padding: 7,
 '& .MuiSwitch-switchBase': {
  margin: 1,
  padding: 0,
  transform: 'translateX(6px)',
  '&.Mui-checked': {
   color: '#fff',
   transform: 'translateX(22px)',
   '& .MuiSwitch-thumb:before': {
    backgroundImage: `url('data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color:white"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg>')`,
   },
   '& + .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
   },
  },
 },
 '& .MuiSwitch-thumb': {
  backgroundColor: '#003892',
  width: 32,
  height: 32,
  '&:before': {
   content: "''",
   position: 'absolute',
   width: '100%',
   height: '100%',
   left: 0,
   top: 0,
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   backgroundImage: `url('data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color:white"><path d="M437.333 32H74.667C51.198 32 32 51.197 32 74.666v282.667C32 380.802 51.198 400 74.667 400h138.666l-42.666 48v32h170.666v-32l-42.666-48h138.666C460.802 400 480 380.802 480 357.333V74.666C480 51.197 460.802 32 437.333 32zm0 288H74.667V74.666h362.666V320z"></path></svg>')`,
  },



 },
 '& .MuiSwitch-track': {
  opacity: 1,
  backgroundColor: '#8796A5',
  borderRadius: 20 / 2,
 },
}));


export default function SwitchType() {
 const switchContext = React.useContext(SwitchContext);
 return (
  <FormGroup>
   Desktop
   <FormControlLabel
    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked
     onChange={(e) => {

      switchContext.setSwitchType(e.target.checked ? 'mobile' : 'desktop');
   
     }}
    />}
    label=""
   />
   Mobile

  </FormGroup>
 )

}
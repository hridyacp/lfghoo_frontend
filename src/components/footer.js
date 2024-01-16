import { useEffect, useState } from "react";
import '../components/navigation.css';
import ghoLogo from '../Assets/gho_logo.png';
import user from '../Assets/logo2.png';
import { Grid } from "@mui/material";

function Footer() {
 
  return (
    <div className="nav-main">
      <Grid container>
        <Grid item xs={2}>
   
      </Grid>
      <Grid item xs={7}>
      
      </Grid>
      <Grid container item xs={3}  alignContent={"center"} justifyContent={"center"} alignItems={"center"} spacing={2}>
     <Grid item xs={4}>
     <img width="60px" height="60px" src={user} alt="user" />
  </Grid>
  <Grid item xs={4}>
  <img width="60px" height="60px" src={user} alt="user" />
  </Grid>
  <Grid item xs={4}>
  <img width="60px" height="60px" src={user} alt="user" />
  </Grid>
 
  </Grid>
  </Grid>
  </div>
  )
}
export default Footer;
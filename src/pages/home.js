import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import Navigation from "../components/navigation";
import '../App.css';
import Footer from "../components/footer";
import gemini from '../Assets/coinsOverla.png';
import createBtn from '../Assets/button.png';
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#003D2D',
    border: '2px solid white',
    borderRadius:"20px",
    p: 4,
    color:"black",
    maxHeight:"500px",
    overflowY:"auto",
    scrollbarWidth: "thin",
    fontFamily:"'Kalnia', serif",
  };

function Home(){
    const [isStripe,setIsStripe]=useState(false);
    const [open,setOpen]=useState(false);
    const handleClose=()=>{
        setOpen(false);
    }
//       useEffect(()=>{
//         axios.get("http://localhost:3001/stripeValue").then((res)=>{
//             setOptions({clientSecret:res?.data?.client_secret})
// console.log(res,"res",res?.data?.client_secret)
//         })
//       },[])
const getStripes=async ()=>{
    setOpen(true);
}
const handlePay=()=>{
    axios.post("http://localhost:3001/create-checkout-session").then((res)=>{
        console.log(res,"res")
         window.location.href=res.data;
      })
}
    return(
        <>
         <div className="main-div">
   
     
           <Grid item xs={12} sx={{paddingLeft:"2px",paddingRight:"2px"}}>
               <div >
           <Navigation />
           </div>
           </Grid>
         
             
           <Grid container item xs={12} justifyContent={"center"} alignItems={"center"} spacing={4}>
         <Grid item xs={1}></Grid>
           <Grid item xs={5} justifyContent={"center"}>
            <div className="side-cryptos">
            <img className="side-crypto" src={gemini} alt="crypto" />
            </div>
           </Grid>
       
           <Grid container item xs={6} spacing={2} justifyContent={"center"} alignItems={"center"}>
          
          <div className="form-contain">
            
          <Grid item xs={12}></Grid>
            <Grid item xs={12} sx={{width:"100%"}}>
            <div className="right-sub">
            <div>
              <h3 style={{margin:0}}>Stake and Gain</h3> 
            </div>
            {/* <div style={{display:"flex",gap:"6px"}}>
            <h3 style={{margin:0}}>Fabulous</h3><h2 style={{margin:0}}> GHO</h2>
            </div> */}
            <div>
            <h2 style={{margin:0}}>GHO TOKENS </h2>
            </div>
            </div>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={6} sx={{width:"100%",height:"100%"}}>
            <div className="form-container">
           
            <input type="text" name="collateral" placeholder="Collateral"/>
          
            <div className="wrapper">
            <input type="text" name="tokens" placeholder="No. of Tokens" />
            <div className="units"><span >GHO</span></div>
            
            </div> 
            <div className="btn-container">
            <button onClick={getStripes} className="button-create"><img width={'150px'} src={createBtn} alt="btn"/></button>
            </div>
                   
             
            </div>
          
             
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}></Grid>
            </div>
          
           </Grid>
          
           </Grid>
           
           <Grid item xs={12}>
               
           <Footer />
           
         
           </Grid>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="form-main">
<div className="verify-container">
  <div className="verify-content">
  {/* {!isVerifyLoading?
    <>
  {isSign?
  <h2 style={{textAlign:"center",fontFamily:"'Kalnia', serif",fontWeight:700}}>Sign your message!</h2>:
  <h2 style={{textAlign:"center",fontFamily:"'Kalnia', serif",fontWeight:700}}> OK, lets get the proof!</h2>}</>
  :<h2 style={{textAlign:"center",fontFamily:"'Kalnia', serif",fontWeight:700}}> Time for the reveal!</h2>} */}
   
  </div>
  <div className="button-verify">
    {/* {!isVerifyLoading? */}
   
  <Button size="small" sx={{display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>{handlePay()}}><img width={"150px"} height={"50px"} src={createBtn} alt="paybtn" /></Button>
  
 </div>
</div>
</div>
          </Typography>
        </Box>
      </Modal>
         </div>
        </>
    )
}
export default Home;
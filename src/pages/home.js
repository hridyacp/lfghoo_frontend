import { Grid } from "@mui/material";
import Navigation from "../components/navigation";
import '../App.css';
import Footer from "../components/footer";
import gemini from '../Assets/Gemini.png';
import { useEffect, useState } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCard from "../components/stripeCard";
import axios from "axios";

const stripePromise = loadStripe('pk_test_51JmASESJeDTHZ17rRTItK4Y1dsv9riiknmvKc3vhCUhbsEL2NT0XR0RGWa95oB4xkTOKlWYLDvbMkXXw2eKFtoiD00pFoLqPLh');

function Home(){
    const [isStripe,setIsStripe]=useState(false);
    const [options,setOptions]=useState({clientSecret:""})
    // const options = {
    //     // passing the client secret obtained from the Stripe Dashboard
    //     clientSecret: 'pi_3OaEAdSJeDTHZ17r0CKO2Su2_secret_SJH8FwfjhAjZtTBdu9D0xX1nC'
    //   };
      useEffect(()=>{
        axios.get("http://localhost:3001/stripeValue").then((res)=>{
            setOptions({clientSecret:res?.data?.client_secret})
console.log(res,"res",res?.data?.client_secret)
        })
      },[])
const getStripes=async ()=>{
    setIsStripe(true);
}
    return(
        <>
         <div className="main-div">
          
           <Grid item xs={12}>
               <div className="nav-main">
           <Navigation />
           </div>
           </Grid>
           <Grid container item xs={12} justifyContent={"center"} alignItems={"center"}>
           <Grid item xs={6}>
            <div className="side-cryptos">
            <img className="side-crypto" src={gemini} alt="crypto" />
            </div>
           </Grid>
           {!isStripe ?
           <Grid container item xs={6} spacing={2}>
          
           <>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
            <div className="right-sub">
            <div>
                STAKE AND GAIN
            </div>
            <div>
                FABULOUS GHO
            </div>
            <div>
               TOKENS
            </div>
            </div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
            <div className="form-container">
           
            <input type="text" name="collateral" placeholder="Collateral"/>
          
            <div className="wrapper">
            <input type="text" name="tokens" placeholder="No. of Tokens" />
            <div className="units"><span >GHO</span></div>
            
            </div> 
                    <button className="button-create" onClick={getStripes}>Create Order</button>
             
            </div>
          
             
            </Grid>
            <Grid item xs={2}></Grid>
            </>
          
           </Grid>
           :  <> <Grid container item xs={6} spacing={2} sx={{height:"100vh"}}>
        
                 {/* <Grid item xs={2}></Grid> */}
                 <Grid item xs={8} >
                   
            <Elements stripe={stripePromise} options={options}>
           <StripeCard />
         </Elements>
       
         </Grid>
         <Grid item xs={2}></Grid>
         </Grid>
         </>
          }
           </Grid>
           
           <Grid item xs={12}>
               
           <Footer />
           
         
           </Grid>
         </div>
        </>
    )
}
export default Home;
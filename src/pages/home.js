import { Grid } from "@mui/material";
import Navigation from "../components/navigation";
import '../App.css';
import Footer from "../components/footer";
import gemini from '../Assets/Gemini.png';

function Home(){

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
           <Grid container item xs={6} spacing={2}>
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
                    <button className="button-create">Create Order</button>
             
            </div>
            
            </Grid>
            <Grid item xs={2}></Grid>
           </Grid>
           </Grid>
           
           <Grid item xs={12}>
               
           <Footer />
           
         
           </Grid>
         </div>
        </>
    )
}
export default Home;
import { useEffect, useState } from "react";
import '../components/navigation.css';
import ghoLogo from '../Assets/gho_logo.png';
import user from '../Assets/logo2.png';
import { Grid } from "@mui/material";

function Navigation() {
    const [account,setAccount]=useState();
    const [isConnected,setIsConnected]=useState(false);
const connectWallet=async()=>{      
    if (window.ethereum) {
        try{
     const accounts= await window.ethereum.request({ method: 'eth_requestAccounts' });
     console.log(accounts,"accounts")
     if(accounts.length>0){
     setAccount(accounts[0])
     localStorage.setItem("walletAddress",accounts[0]);
     setIsConnected(true);
     }
     else{
        setIsConnected(false);
     }
    }
    catch{
        console.log("user refused to connect")
    }
     //If yes
     //setIsConnected(true);
     //setIsNickName(false)
     //else
   
     //send another api with nickname and wallet address
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    else{
        alert("Please install metamask");
        window.open('https://metamask.io/','_blank')
    }
  }
  useEffect(()=>{
    if(window.ethereum){
     window.ethereum.on('accountsChanged', (accounts) => {
     if(accounts?.length===0){
     localStorage.clear();
     setIsConnected(false);
     }
   });
    }
   },[])
  return (
    <div className="nav-main">
      <Grid container>
        <Grid item xs={2}>
      <div className="text-cont">
        <img width="80px" height="60px" src={ghoLogo} alt="ghologo" />
      </div>
      </Grid>
      <Grid item xs={7}>
      
      </Grid>
      <Grid container item xs={3}  alignContent={"center"} justifyContent={"center"} alignItems={"center"} spacing={2}>
     <Grid item xs={6}>
    {!isConnected?
  <button className="button-connect" style={{"&:hover": { color: 'black',backgroundColor:"#4E9282"},}} onClick={connectWallet}>CONNECT WALLET</button>
  : <button className="button-connect" style={{"&:hover": { color: 'black',backgroundColor:"#4E9282"},}} >CREATE</button>}
  </Grid>
  <Grid item xs={6}>
  <img width="60px" height="60px" src={user} alt="user" />
  </Grid>
 
  </Grid>
  </Grid>
  </div>
  )
}
export default Navigation;
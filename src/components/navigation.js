import { useEffect, useState } from "react";
import '../components/navigation.css';
import ghoLogo from '../Assets/ghoLogo.png';
import user from '../Assets/profile.png';
import notifyIcon from '../Assets/notify.png';
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
      <Grid container  alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={1} >
     
      </Grid>
        <Grid item xs={1}  alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
      <div className="text-cont">
        <img width="90px" height="45px" src={ghoLogo} alt="ghologo" />
      </div>
      </Grid>
      <Grid item xs={6}>
      
      </Grid>
      <Grid container item xs={4}  alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
     <Grid container item xs={12} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
    {!isConnected?
  <button className="button-connect" style={{"&:hover": { color: 'black',backgroundColor:"#4E9282"},}} onClick={connectWallet}>CONNECT WALLET</button>
  : <><Grid item xs={2} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
  <img width="55px" height="55px" src={user} alt="user" style={{opacity:"1"}} />
  </Grid>
  <Grid item xs={4}>
  {/* <img width="40px" height="40px" src={notifyIcon} alt="notify" style={{opacity:"1"}} /> */}
  <div className="token-container">
  <h4 style={{margin:0,padding:"2px"}}>Tokens:12</h4>
  </div>
  </Grid></>}
  </Grid>
  
  <Grid item xs={3}></Grid>
  </Grid>
  </Grid>
  </div>
  )
}
export default Navigation;
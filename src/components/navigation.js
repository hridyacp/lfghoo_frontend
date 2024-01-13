import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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
    <div className='connect-button'>
    {!isConnected?
  <button style={{backgroundColor:"#E69D72",color:"black" ,fontWeight:700,fontFamily:"'Kalnia', serif",fontSize:"16px","&:hover": { color: 'black',backgroundColor:"#E69D72"},}} onClick={connectWallet}>CONNECT WALLET</button>
  : <button style={{backgroundColor:"#E69D72",color:"black",fontWeight:700,fontFamily:"'Kalnia', serif",fontSize:"16px","&:hover": { color: 'black',backgroundColor:"#E69D72"},}} >CREATE</button>}
  </div>
  )
}
export default Navigation;
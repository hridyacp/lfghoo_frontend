
import {PaymentElement} from '@stripe/react-stripe-js';
import React, { useState } from 'react'

function StripeCard(){
    const [success, setSuccess ] = useState(false)
   


//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })


//     if(!error) {
//         try {
//             const {id} = paymentMethod
//             // const response = await axios.post("http://localhost:4000/payment", {
//             //     amount: 1000,
//             //     id
//             // })

//             // if(response.data.success) {
//             //     console.log("Successful payment")
//             //     setSuccess(true)
//             // }
//             console.log("done")
//             window.location.href="https://www.codecademy.com/"

//         } catch (error) {
//             console.log("Error", error)
//         }
//     } else {
//         console.log(error.message)
//     }
// }

return (
    <form style={{minHeight:"500px"}}>
      <PaymentElement sx={{minHeight:"500px"}}/>
      <button>Submit</button>
    </form>
  );

}

export default StripeCard;
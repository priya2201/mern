import React from 'react'
import {Box,Stack} from'@chakra-ui/react'
import Card from './Card'
import axios from 'axios'

function Home() {
    const checkoutHandler=async(amount)=>{
        const{data:{key}}=await axios.get('http://localhost:5000/api/getkey')
const {data:{order}}=await axios.post('http://localhost:5000/api/checkout',{
    amount
})
// console.log(window)

const options = {
    key,
    amount: order.amount,
    currency: "INR",
    name: "Dreamy Progrmmer mern",
    description: "Tutorial of RazorPay",
    image: "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png",
    order_id: order.id,
    callback_url: "http://localhost:5000/api/paymentverification",
    prefill: {
        name: "piaa ",
        email: "piaa@example.com",
        contact: "9999999999"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#23ef00"
    }
};
const razor=new window.Razorpay(options);
    razor.open()
}

    
  return (
<Box>
    <Stack h={'100vh'} alignItems='center' justifyContent='center' direction={['column','row']}>
          <Card amount={5000} img="https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png" checkoutHandler={checkoutHandler}/>
          <Card amount={3000} img="https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png" checkoutHandler={checkoutHandler}/>
    </Stack>
</Box>
  )
}

export default Home
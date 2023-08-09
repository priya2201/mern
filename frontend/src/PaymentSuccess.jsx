import { VStack ,Box, Heading,Text} from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function PaymentSuccess() {
    const searchQuery=useSearchParams()[0]
    console.log(searchQuery)
    const referenceNum=searchQuery.get('reference')

  return (
<Box>
    <VStack h='100vh' justifyContent={'center'}>
<Heading textTransform={'uppercase'}>Order Successfull</Heading>
<Text>
    Reference No. {referenceNum}
</Text>
    </VStack>
</Box>
  )
}

export default PaymentSuccess
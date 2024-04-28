import { Button,  } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <Stack>
            <Button onClick={() => checkoutHandler(amount)} sx={{color:'white', height:'30px' ,backgroundImage:'radial-gradient( circle 325px at 19.2% 64.8%,  rgba(254,62,101,1) 9.7%, rgba(166,24,146,1) 91.3% )', borderRadius:'10px'}}>Book Now</Button>
        </Stack>
    )
}

export default Card

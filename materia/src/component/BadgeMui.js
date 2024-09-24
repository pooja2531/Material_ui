import React from 'react'
import { Stack,Badge } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

function BadgeMui() {
  return (
    <Stack>
        <Badge badgeContent={5}>
         <EmailIcon></EmailIcon>
        </Badge>
       
    </Stack>
  )
}

export default BadgeMui
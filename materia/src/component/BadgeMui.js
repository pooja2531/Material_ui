import React from 'react'
import { Stack,Badge } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

function BadgeMui() {
  return (
    <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={5} color='primary'>
         <EmailIcon></EmailIcon>
        </Badge>

        <Badge badgeContent={160} color='primary' max={150}>
         <EmailIcon></EmailIcon>
        </Badge>

        <Badge badgeContent={0} color='primary' showZero >
         <EmailIcon></EmailIcon>
        </Badge>

        <Badge badgeContent={0} color='secondary' showZero >
         <EmailIcon></EmailIcon>
        </Badge>

        <Badge variant='dot' color='primary' showZero >
         <EmailIcon></EmailIcon>
        </Badge>
       
    </Stack>
  )
}

export default BadgeMui
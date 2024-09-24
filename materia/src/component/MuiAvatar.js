import React from 'react'
import {Stack, Avatar, AvatarGroup} from '@mui/material'

function MuiAvatar() {
  return (
    <Stack direction={'row'} spacing={2}>
       <AvatarGroup max={4}>
       <Avatar sx={{bgcolor:"success.light"}}>PC</Avatar>
        <Avatar variant='squre' src='https://randomuser.me/api/portraits/women/79.jpg'>PC</Avatar>
        <Avatar sx={{bgcolor:"success.light"}}>UD</Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/81.jpg'>PC</Avatar>
       </AvatarGroup>
       <Avatar variant='square' src='https://randomuser.me/api/portraits/women/79.jpg'>PC</Avatar>
    </Stack>
  )
}

export default MuiAvatar
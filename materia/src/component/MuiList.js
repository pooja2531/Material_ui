import React from 'react'
import { Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Avatar, ListItemButton,Divider } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

function MuiList() {
    return (
        <Box sx={{ width: '250px', bgcolor: '#efefef' }}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon></EmailIcon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='List item 1 ' secondary='secondary text'></ListItemText>
                    </ListItemButton>

                </ListItem>
                <Divider></Divider>
                <ListItem>
                    <ListItemText>Item1</ListItemText>
                </ListItem>
            </List>

        </Box>
    )
}

export default MuiList
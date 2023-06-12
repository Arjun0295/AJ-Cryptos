import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import NewsIcon from '@mui/icons-material/Newspaper';
import styled from '@emotion/styled';

const Sidebar = () => {
  return (
    <Box flex={3} sx={{position:'fixed' ,display: {marginTop: '4%',xs: "none", sm: "block"}, minHeight:'100%', minWidth:'12%'}} bgcolor={'white'} border='1px solid lightgrey'>
              <List>
          <ListItem component={Link} to={"/"} style={{textDecoration:"none", color:'black'}}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Link to="/cryptocoins" style={{textDecoration:"none", color:'black'}}>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <BitcoinIcon />
              </ListItemIcon>
              <ListItemText primary="Coins"/>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/news" style={{textDecoration:"none", color:'black'}}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <NewsIcon />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          </Link>
          {/* <Link to="/exchangerates" style={{textDecoration:"none", color:'black'}}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <NewsIcon />
              </ListItemIcon>
              <ListItemText primary="Exchange" />
            </ListItemButton>
          </ListItem>
          </Link> */}
        </List>
    </Box>
  )
}

export default Sidebar
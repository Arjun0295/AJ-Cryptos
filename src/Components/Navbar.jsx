import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import BitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ExchangeIcon from '@mui/icons-material/CurrencyExchange';
import React, { useState } from 'react'
import NewsIcon from '@mui/icons-material/Newspaper';
import SearchIcon from '@mui/icons-material/Search';


const StyledToolbar = styled(Toolbar)({
  justifyContent:"space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const IconContainer = styled(Toolbar)(({ theme }) => ({
  display:"none",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))
const UserBox = styled(Toolbar)(({ theme }) => ({
  display:"flex",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar positionSticky>
        <StyledToolbar>
          <Typography variant='h6' sx={{display:{xs: "none", sm:"flex"}}}>
        Aj Cryptos
          </Typography>
          <BitcoinIcon sx={{display:{xs: "flex", sm:"none"}}}/>
        <Search><InputBase placeholder='Search Anything...'/></Search>
      <IconContainer sx={{gap:3}}>
        <SearchIcon />
      <Badge badgeContent={4} color='danger'>
        <ExchangeIcon/>
      </Badge>
      <Badge badgeContent={3} color='danger'>
        <NewsIcon/>
      </Badge>
      <Avatar sx={{width:30, height:30}} src='https://picsum.photos/seed/picsum/200/300'
      onClick={e=>setOpen(true)} />
      </IconContainer>
      <UserBox sx={{gap:2}}>
        <Typography variant='p'>AJ</Typography>
        <Avatar sx={{width:30, height:30}} src='https://picsum.photos/seed/picsum/200/300'
        onClick={e=>setOpen(true)}></Avatar>
      </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
    </Box>
  )
}

export default Navbar
import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom'
import { Box, Button, Modal, TableCell, TableRow, Typography } from '@mui/material';
import { useGetCryptosQuery } from '../services/cryptoApi';
import CryptoCoins from './CryptoCoins';
import News from './News';
import BIT from "../Images/bitcoin-1813545_1280.jpg";
import styled from '@emotion/styled';

const CustomModal = styled(Modal)({
  display:"flex",
  justifyContent:'center',
  alignItems:'center'
})
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(15);
  const globalStats = data?.data?.stats;
  console.log(data);
  const [open, setOpen] = useState(false)
  if(isFetching) return 'Loading Cryptos...'
  return (
<Box flex={1} mt='5%' ml='8%' textAlign='center'>
<Box sx={{display:"flex", mt:"3%", ml:"10%", mb:"2.5%"}}>
<Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', m:'10%'}}>
<Typography variant='h5' color='grey' fontFamily='serif'>Explore the World of Cryptos with</Typography>
<Typography variant='h5' color='grey' fontFamily='serif'>AJ Cryptos</Typography>
<Link to='/cryptocoins'>
<Button sx={{m:"10%", color:'black', fontFamily:'monospace', fontSize:'xx-large', fontWeight:'bold'}}>Explore Now</Button>
</Link>
  </Box>
  <img src={BIT} alt='AJ' width="35%" height="35%"></img>
  </Box>
  <Button sx={{color:'grey', fontFamily:'sans-serif', fontSize:'large', fontWeight:'bold'}} onClick={e=>{setOpen(true)}}>Check Out Global Stats</Button>
<CustomModal
  open={open}
  onClose={e=>{setOpen(false)}}
>
  <Box height='60%' width='40%' bgcolor='white' borderRadius={5} textAlign='center'>
<Typography variant='h2' m='5%'>Global Statistics</Typography>
<Box display='flex' justifyContent='space-evenly'>
    <Box>
  <TableRow mx={2}>Total CryptoCurrencies</TableRow>
  <TableCell>{millify(globalStats.total)}</TableCell>
  <TableRow>Total 24hr Volume</TableRow>
  <TableCell>{millify(globalStats.total24hVolume)}</TableCell>
  <TableRow>Total Exchanges</TableRow>
  <TableCell>{millify(globalStats.totalExchanges)}</TableCell>
    </Box>
    <Box>
  <TableRow>Total Market Cap</TableRow>
  <TableCell>{millify(globalStats.totalMarketCap)}</TableCell>
  <TableRow>Total Markets</TableRow>
  <TableCell>{millify(globalStats.totalMarkets)}</TableCell>
    </Box>
</Box>
</Box>
</CustomModal>
</Box>
  )
}

export default Homepage
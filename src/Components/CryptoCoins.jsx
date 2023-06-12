import React, { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Container, InputBase, Paper } from '@mui/material';
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';


const CryptoCoins = ({ simplified }) => {
  const count = simplified ? 15 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [SearchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(SearchTerm.toLowerCase()));
    setCryptos(filteredData)
  }, [cryptosList, SearchTerm])
  

  if(isFetching) return 'Loading...'
  return (
  <Box flex={2} bgcolor='whitesmoke' marginTop='4%' marginLeft='12%' minHeight={650}>
  {!simplified && (

    <Box  sx={{display:'flex', justifyContent:'center', mt:'5%',mx:'25%'}}>
      <InputBase
        sx={{bgcolor:'white', minWidth:'100%', border:'2px solid lightgrey',px:'3%', py:'1%', fontSize:'large'}}
        placeholder="Search Cryptos"
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />
    </Box>
  )}
    <Box sx={{ display: 'flex',justifyContent: 'center' ,flexWrap: 'wrap', p:4}}>
    {cryptos?.map((currency) => (
     <Link to={`/crypto/${currency.uuid}`} style={{textDecoration:"none"}} className='Pages'>
     <Paper sx={{ m:3, minWidth:325}} elevation={24} variant='outlined' square>
       <Card sx={{ maxWidth: "100%"}} >
         <CardMedia
           component="img"
           alt="Currency Icon"
           width="140"
           Height="140"
           image={currency.iconUrl}
         />
         <CardContent width>
           <Typography gutterBottom variant="h5" component="Box">
             {`${currency.rank}. ${currency.name.substring(0,10)}`}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             Price: {millify(currency.price)}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             Market Cap: {millify(currency.marketCap)}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             Daily Change: {millify(currency.change)}
           </Typography>
         </CardContent>
         <CardActions>
           <Button size="small">Share</Button>
           <Button size="small">Learn More</Button>
         </CardActions>
       </Card>
     </Paper>
   </Link>
    ))}   
      </Box>
      </Box>
  )
}

export default CryptoCoins
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import { Avatar, TextField, MenuItem, List, ListItem } from '@mui/material';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';



const AlterImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 5 : 12 });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return 'Loading...';

  return (
    <Box marginTop='4%' marginLeft='12%' flex={1} textAlign='center' bgcolor='whitesmoke' minHeight={650}>
      {!simplified && (
        <TextField
          id="filled-select-currency"
          select
          label="Wanna Search Something Specific ?"
          variant="outlined"
          optionFilterProp="children"
          sx={{minWidth:'40%' ,m:'3%', bgcolor:'white'}}
          onChange={(event) => setNewsCategory(event.target.value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <MenuItem value="Cryptocurrency">Cryptocurrency</MenuItem>
          {data?.data?.coins?.map((coin) => (
            <MenuItem key={coin.id} value={coin.name}>
              {coin.name}
            </MenuItem>
          ))}
        </TextField>
        )}
      <Box display='flex' flexWrap='wrap' m='1%'>
      {cryptoNews.value.map((news, i)=> (
        <Card 
        variant="outlined"
        sx={{
          margin:'1%',
          bgcolor:'white',
          width: 400,
     gridColumn: 'span 2',
     flexDirection: 'row',
     flexWrap: 'wrap',
     overflow: 'hidden',
     gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
     transition: 'transform 0.3s, border 0.3s',
     '&:hover': {
       borderColor: 'grey',
       transform: 'translateY(-2px)',
      },
      '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
    }}>
   <Box>
     <CardContent>
      <Box>
       <Typography variant="h6">
        {news.name.substring(0, 35)}...
       </Typography>
      </Box>
      <Box>
       <Typography variant="subtitle1" color="text.secondary">
          {news.description.substring(0, 120)}...
       </Typography>
         </Box>
   <CardMedia
     component="img"
     height={100}
     image={news?.image?.thumbnail.contentUrl || AlterImage}
     alt="News Thumbnail"
     />
     </CardContent>
     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || AlterImage} alt='News Provider'/>
      <Typography px={2}>{news.provider[0]?.name}</Typography>
      <Typography px={2}>{moment(news.datePublished).startOf('ss').fromNow()}</Typography>
     </Box>
     </Box>
 </Card>
      ))}
      </Box>
      </Box>
  )
}

export default News
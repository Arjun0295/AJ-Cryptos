import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Grid, Typography, Select, Box } from '@mui/material';
import { TextField, MenuItem } from '@mui/material';
import HTMLReactParser from 'html-react-parser';
import { DataGrid } from '@mui/x-data-grid';

import {useGetCryptoDetailsQuery} from '../services/cryptoApi'

const SingleCoinPage = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState(Date)
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin;

  const time = ['3 hrs', '24 hrs', '7 days', '30 days', '3 months', '1 years', '3 years', '5 years'];

  const stats = [
    { title: 'Price in USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`},
    { title: 'Rank', value: cryptoDetails?.rank},
    { title: '24 hrs Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`},
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`},
    { title: 'All Time High (Daily Average)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`},
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets},
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges},
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}` },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}` },
  ];

  const { Title, Text } = Typography;
  const { Option } = Select

  return (
<Box>
<Typography variant='h3'>
{data?.data?.coin.name} ({data?.data?.coin.symbol})</Typography><br/>
<TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="7 days"
          helperText="Please select Time Period"
          variant="filled"
          onChange={(value) => setTimePeriod(value)}
        >
          <MenuItem value="7 days">7 days</MenuItem>
          {time.map((Date) => (
            <MenuItem key={Date}>{Date}</MenuItem>
          ))}
        </TextField>
            <Typography variant='h3'>{cryptoDetails.name} Value Statistics</Typography>
            <Typography variant='p'>An overview showing the stats of {cryptoDetails.name}</Typography>
            <Box>
            {stats.map(({ icon, title, value }) => (
            <DataGrid className="coin-stats">
                <Text>{icon}</Text>
                <Text>{title}</Text>
                </DataGrid>))}
                </Box>
</Box>
  )
}

export default SingleCoinPage
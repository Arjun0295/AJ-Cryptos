import React from "react";
import "./App.css";
import {Navbar, Homepage, ExchangeRates, CryptoCoins, SingleCoinPage, News, Sidebar} from "./Components";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";


const App = () => {
  return (
    <>
        <Navbar/>
        <Sidebar/>
      <Box>
        <Stack direction={'row'}>
  <Routes>
    <Route exact path="/" element={<Homepage />}></Route>
    <Route
      exact
      path="/exchangerates"
      element={<ExchangeRates />}
      ></Route>
    <Route exact path="/cryptocoins" element={<CryptoCoins />}></Route>
    <Route
      exact
      path="/crypto/:coinId"
      element={<SingleCoinPage />}
      ></Route>
    <Route exact path="/news" element={<News />}></Route>
  </Routes>
  </Stack>
</Box>
{/* <Typography>
  AJ Cryptos
  <br />
  All rights reserved
</Typography>
<Box sx={{alignContent:"center"}}>
  <Link to="/">Home</Link>
  <Link to="/cryptocoins">Crypto Coins</Link>
  <Link to="/exchangerates">Exchanges</Link>
  <Link to="/news">News</Link>
</Box>  */}
    </>
  );
};

export default App;

{/*
<CryptoCoins simplified/>
<News simplified/>
</Stack> */}
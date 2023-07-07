import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, VStack, Text, Link } from '@chakra-ui/react';

import { myTheme } from './Theme/myTheme';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import Daftar from './Pages/Daftar';
import LupaKataSandi from './Pages/LupaKataSandi';
import Home from './Pages/Home';
import Verification from './Pages/Verification.jsx';
import GantiKataSandi from './Pages/GantiKataSandi.jsx';
import Reservasi from './Pages/Reservasi.jsx';
import Riwayat from './Pages/Riwayat.jsx';
import Pembayaran from './Pages/Pembayaran.jsx';

import './style.css';
import Profile from './Pages/Profile';

const NotFound = () => {
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      fontWeight={'bold'}
      spacing={null}
      justifyContent={'center'}
      textAlign={'center'}
      zIndex={99}
    >
      <Text fontSize={'64px'}>404</Text>
      <Text fontSize={'64px'}>PAGE NOT FOUND</Text>
      <Link
        href={'/'}
        fontSize={'24px'}
        color={'primary'}
        textDecoration={'underline'}
      >
        Back to Landing Page
      </Link>
    </VStack>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/daftar'} element={<Daftar />} />
          <Route path={'/lupakatasandi'} element={<LupaKataSandi />} />
          <Route path={'/verifikasi'} element={<Verification />} />
          <Route path={'/gantikatasandi'} element={<GantiKataSandi />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/reservasi'} element={<Reservasi />} />
          <Route path={'/riwayat'} element={<Riwayat />} />
          <Route path={'/pembayaran'} element={<Pembayaran />} />
          <Route path={'/profile-settings'} element={<Profile />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

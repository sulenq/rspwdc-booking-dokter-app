import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, HStack, Text, VStack, Image, Button } from '@chakra-ui/react';

export default function LandingPage() {
  const navigate = useNavigate();

  const carousel = [
    {
      id: 1,
      header: 'Selamat Datang di RS Panti Wilasa dr.Cipto Semarang',
      body: 'Aplikasi terbaik booking online di RSPWDC Semarang untuk kebutuhan kesehatan dan medis Anda.',
      src: './landingPage/1.png',
    },
    {
      id: 2,
      header:
        'Banyak dokter dan ahli dalam bidangnya untuk membantu kesehatan Anda',
      body: 'Rumah Sakit yang mampu memberikan pelayanan kesehatan berdasarkan kasih bagi penyembuhan yang holistic sesuai standar pelayanan medis, keperawatan dan penunjang medis secara professional, bermutu, terintegrasi dan bertumbuh untuk mewujudkan derajat kesehatan yang optimal bagi masyarakat.',
      src: './landingPage/2.png',
    },
    {
      id: 3,
      header:
        'Check kesehatan dan booking online mudah dilakukan kapan dan dimana saja',
      body: 'Rumah Sakit yang mampu menjadi rujukan masyarakat yang memiliki pelayanan berkualitas dan terjangkau, penuh cinta kasih yang tulus, hangat, dan bersahabat bagi masyarakat luas dapat dilakukan kapan dan dimana saja.',
      src: './landingPage/3.png',
    },
    {
      id: 4,
      header: 'Ayo mulai hidup sehat dan sejahtera bersama kami sekarang juga ',
      body: '"Kesehatan yang baik bukanlah sesuatu yang dapat kita beli. Namun, sesuatu yang dapat menjadi tabungan yang sangat berharga." - Anne Wilson Schaef.',
      src: './landingPage/4.png',
    },
  ];
  const [activeCarousel, setActiveCarousel] = useState({
    id: 1,
    header: 'Selamat Datang di RS Panti Wilasa dr.Cipto Semarang',
    body: 'Aplikasi terbaik booking online di RSPWDC Semarang untuk kebutuhan kesehatan dan medis Anda.',
    src: './landingPage/1.png',
  });

  function handleNext() {
    if (activeCarousel?.id !== 4) {
      setActiveCarousel(carousel[activeCarousel?.id]);
    } else {
      navigate('/login');
    }
  }
  function handleSkip() {
    navigate('/login');
  }

  return (
    <Box id={'appContainer'}>
      <VStack h={'inherit'} justifyContent={'space-between'}>
        <Box>
          <Image
            w={'100%'}
            src={activeCarousel?.src}
            alt={activeCarousel?.src}
          />
          <HStack justifyContent={'center'} py={'12px'}>
            <Box
              className={'carouselNav'}
              bg={activeCarousel?.id === 1 && 'primary'}
            ></Box>
            <Box
              className={'carouselNav'}
              bg={activeCarousel?.id === 2 && 'primary'}
            ></Box>
            <Box
              className={'carouselNav'}
              bg={activeCarousel?.id === 3 && 'primary'}
            ></Box>
            <Box
              className={'carouselNav'}
              bg={activeCarousel?.id === 4 && 'primary'}
            ></Box>
          </HStack>
          <Text
            textAlign={'center'}
            fontSize={'24px'}
            lineHeight={'32px'}
            fontWeight={'bold'}
            px={'16px'}
            mb={'16px'}
          >
            {activeCarousel?.header}
          </Text>
          <Text textAlign={'center'} px={'16px'}>
            {activeCarousel?.body}
          </Text>
        </Box>
        <HStack
          w={'100%'}
          justifyContent={'space-between'}
          py={'32px'}
          px={'16px'}
        >
          <Button
            onClick={handleSkip}
            w={'50%'}
            variant={'ghost'}
            justifyContent={'flex-start'}
            color={'gray'}
          >
            LEWATI
          </Button>
          <Button className={'primaryBtn'} onClick={handleNext} w={'50%'}>
            BERIKUTNYA
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

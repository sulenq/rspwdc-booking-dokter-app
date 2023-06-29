import React from 'react';

import {
  Box,
  Text,
  Image,
  Icon,
  HStack,
  Avatar,
  Heading,
  VStack,
} from '@chakra-ui/react';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import { Nav } from '../myComponents';

export default function Home() {
  const featured = ['1.png', '2.png', '3.png'];
  const ruang = [
    { name: 'Kelas I', price: 'Rp. 400.00/malam', src: '1.png' },
    { name: 'Kelas II', price: 'Rp. 400.00/malam', src: '2.png' },
    { name: 'Kelas III', price: 'Rp. 400.00/malam', src: '3.png' },
    { name: 'Kelas VIP', price: 'Rp. 400.00/malam', src: '4.png' },
    { name: 'ICU', price: 'Rp. 400.00/malam', src: '5.png' },
  ];
  const majalah = [
    { text: 'Dampak Self-Diagnose terhadap Kesehatan Mental', src: '1.png' },
    {
      text: 'Mengenal Hepatitis Lebih Dekat melalui Hari Hepatitis Sedunia ',
      src: '2.png',
    },
    {
      text: 'Lindungi Sesama dengan Memperketat Protokol Kesehatan',
      src: '3.png',
    },
    { text: 'Sudah Lengkapkah Imunisasi Sang Buah Hati? ', src: '4.png' },
    {
      text: 'Hidup Manis Tanpa Gula. Selamat Hari DIabetes Nasional 2022',
      src: '5.png',
    },
  ];

  return (
    <VStack id={'appContainer'}>
      <Nav />
      <HStack w={'100%'} p={'16px'} justifyContent={'space-between'}>
        <HStack>
          <Avatar />
          <Box>
            <Text>Welcome</Text>
            <Text fontWeight={'bold'}>Jolitos Kurniawan</Text>
          </Box>
        </HStack>
        <Icon fontSize={'28px'} as={NotificationsOutlinedIcon} />
      </HStack>
      <Box w={'100%'} h={'100%'} overflow={'auto'}>
        <Box overflow={'auto'} mb={'8px'}>
          <HStack h={'max-content'} w={'max-content'} gap={null}>
            {featured?.map((f, index) => {
              return (
                <Box
                  key={index}
                  h={'auto'}
                  maxW={'480px'}
                  w={window.innerWidth}
                  overflow={'hidden'}
                >
                  <Image
                    maxW={'480px'}
                    w={window.innerWidth}
                    key={index}
                    src={`./homeFeatured/${f}`}
                  />
                </Box>
              );
            })}
          </HStack>
        </Box>
        <Heading fontSize={'22px'} px={'16px'} mb={'12px'}>
          Ketersediaan Ruang
        </Heading>
        <Box overflow={'auto'}>
          <HStack w={'max-content'} px={'16px'} pb={'8px'}>
            {ruang?.map((f, index) => {
              return (
                <Box
                  key={index}
                  w={'240px'}
                  overflow={'hidden'}
                  boxShadow={'0 0 5px var(--gray)'}
                  borderRadius={'8px'}
                >
                  <Image key={index} src={`./homeRuang/${f?.src}`} />
                  <Text
                    fontSize={'16px'}
                    fontWeight={'bold'}
                    px={'16px'}
                    pt={'8px'}
                    pb={'2px'}
                  >
                    {f?.name}
                  </Text>
                  <Text
                    fontSize={'13px'}
                    fontWeight={'regular'}
                    px={'16px'}
                    pt={'2px'}
                    pb={'13px'}
                  >
                    {f?.price}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </Box>

        <Heading fontSize={'22px'} px={'16px'} mb={'12px'}>
          Majalah Kasih
        </Heading>
        <Box overflow={'auto'}>
          <HStack w={'max-content'} px={'16px'} pb={'8px'}>
            {majalah?.map((f, index) => {
              return (
                <Box
                  key={index}
                  w={'240px'}
                  h={'212px'}
                  overflow={'hidden'}
                  boxShadow={'0 0 5px var(--gray)'}
                  borderRadius={'8px'}
                >
                  <Image key={index} src={`./homeMajalah/${f?.src}`} />
                  <Text
                    fontSize={'16px'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    px={'16px'}
                    py={'13px'}
                  >
                    {f?.text}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
}

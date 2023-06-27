import React from 'react';

import {
  Box,
  Text,
  // Link,
  // Button,
  Image,
  Icon,
  HStack,
  Avatar,
  Heading,
} from '@chakra-ui/react';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function Home() {
  const featured = ['1.png', '2.png', '3.png'];
  const ruang = [
    { name: 'Kelas I', price: 'Rp. 400.00/malam', src: '1.png' },
    { name: 'Kelas II', price: 'Rp. 400.00/malam', src: '2.png' },
    { name: 'Kelas III', price: 'Rp. 400.00/malam', src: '3.png' },
    { name: 'Kelas VIP', price: 'Rp. 400.00/malam', src: '4.png' },
    { name: 'ICU', price: 'Rp. 400.00/malam', src: '5.png' },
  ];

  return (
    <Box id={'appContainer'}>
      <HStack p={'16px'} justifyContent={'space-between'}>
        <HStack>
          <Avatar />
          <Box>
            <Text>Welcome</Text>
            <Text fontWeight={'bold'}>Jolitos Kurniawan</Text>
          </Box>
        </HStack>
        <Icon fontSize={'28px'} as={NotificationsOutlinedIcon} />
      </HStack>
      <Box overflow={'auto'} mb={'24px'}>
        <HStack w={'max-content'}>
          {featured?.map((f, index) => {
            return (
              <Box key={index} w={'320px'} overflow={'hidden'}>
                <Image key={index} src={`./homeFeatured/${f}`} />
              </Box>
            );
          })}
        </HStack>
      </Box>
      <Heading fontSize={'22px'} px={'16px'} mb={'12px'}>
        Ketersediaan Ruang
      </Heading>
      <Box overflow={'auto'} mb={'24px'}>
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
    </Box>
  );
}

import React from 'react';

import {
  Box,
  Text,
  Icon,
  HStack,
  Avatar,
  VStack,
  Button,
} from '@chakra-ui/react';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { Nav } from '../myComponents';

export default function Profile() {
  const settings = [
    {
      name: 'Akun',
      item: [
        { icon: AccountBalanceWalletOutlinedIcon, name: 'Metode Pembayaran' },
        { icon: DomainVerificationOutlinedIcon, name: 'No. Rekam Medis' },
      ],
    },
    {
      name: 'Lainnya',
      item: [
        { icon: PhoneOutlinedIcon, name: 'Tentang Rumah Sakit' },
        { icon: LanguageOutlinedIcon, name: 'Bahasa' },
        { icon: InfoOutlinedIcon, name: 'Bantuan' },
      ],
    },
  ];

  return (
    <VStack id={'appContainer'} justifyContent={'flex-start !important'}>
      <Nav />
      <HStack p={'10px 16px'}>
        <Text fontSize={'26px'} fontWeight={'bold'}>
          Profile
        </Text>
      </HStack>

      <VStack h={'100%'} w={'100%'} justifyContent={'space-between'}>
        <Box w={'100%'}>
          <HStack w={'100%'} p={'16px'} justifyContent={'space-between'}>
            <HStack>
              <Avatar w={'56px'} h={'56px'} />
              <Box>
                <Text fontWeight={'bold'} fontSize={'22px'}>
                  Jolitos Kurniawan
                </Text>
                <Text fontSize={'17px'} opacity={0.5}>
                  jolitoskurniawan@gmail.com
                </Text>
              </Box>
            </HStack>
            <Icon fontSize={'28px'} as={EditOutlinedIcon} />
          </HStack>

          {settings?.map((s, index) => {
            return (
              <Box key={index} p={4}>
                <Text mb={4}>{s?.name}</Text>
                <VStack gap={4}>
                  {s?.item?.map((i, iIndex) => {
                    return (
                      <HStack
                        key={iIndex}
                        gap={4}
                        w={'100%'}
                        p={4}
                        border={'1px solid var(--gray)'}
                        borderRadius={'8px'}
                      >
                        <Icon as={i?.icon} />
                        <Text>{i?.name}</Text>
                      </HStack>
                    );
                  })}
                </VStack>
              </Box>
            );
          })}
        </Box>

        <Box w={'100%'} p={4} pb={'24px'}>
          <Button w={'100%'} className="primaryBtn">
            KELUAR
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
}

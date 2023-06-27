import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Text,
  Link,
  Button,
  Icon,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

export default function LupaKataSandi() {
  const navigate = useNavigate();

  return (
    <Box id={'appContainer'}>
      <HStack p={'10px 16px'} mb={'32px'}>
        <Icon
          onClick={() => {
            navigate('/login');
          }}
          fontSize={'28px'}
          cursor={'pointer'}
          as={KeyboardArrowLeftOutlinedIcon}
        />
        <Text fontSize={'26px'} fontWeight={'bold'}>
          Verifikasi Kode
        </Text>
      </HStack>

      <Text textAlign={'center'} mb={'16px'}>
        Masukan Kode Verifikasi
      </Text>
      <Box px={'16px'}>
        <HStack gap={'32px'}>
          <PinInput otp>
            <PinInputField w={'100%'} h={'70px'} fontSize={'28px'} />
            <PinInputField w={'100%'} h={'70px'} fontSize={'28px'} />
            <PinInputField w={'100%'} h={'70px'} fontSize={'28px'} />
            <PinInputField w={'100%'} h={'70px'} fontSize={'28px'} />
          </PinInput>
        </HStack>
      </Box>
      <Box p={'16px'}>
        <Button
          onClick={() => {
            navigate('/gantikatasandi');
          }}
          className={'primaryBtn'}
          w={'100%'}
        >
          VERIFIKASI
        </Button>
      </Box>
      <Text mt={'16px'} fontSize={'17px'} textAlign={'center'}>
        Kembali ke{' '}
        <Link href={'/login'} fontWeight={'bold'} color={'primary'}>
          Masuk
        </Link>
      </Text>

      <Text
        position={'fixed'}
        bottom={'32px'}
        w={'100%'}
        fontSize={'14px'}
        textAlign={'center'}
        left={'0'}
      >
        Tidak Mempunyai Akun?{' '}
        <Link href={'/daftar'} fontWeight={'bold'} color={'primary'}>
          Daftar Disini
        </Link>
      </Text>
    </Box>
  );
}

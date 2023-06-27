import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Input,
  Text,
  Link,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  HStack,
} from '@chakra-ui/react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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
          as={KeyboardArrowLeftOutlinedIcon}
        />
        <Text fontSize={'26px'} fontWeight={'bold'}>
          Lupa Kata Sandi
        </Text>
      </HStack>

      <Text textAlign={'center'} mb={'16px'}>
        Masukan Alamat Email
      </Text>
      <Box px={'16px'}>
        <InputGroup>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={EmailOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} placeholder="E-mail" />
        </InputGroup>
      </Box>
      <Box p={'16px'}>
        <Button className={'primaryBtn'} w={'100%'}>
          KIRIM
        </Button>
      </Box>
      <Text fontSize={'17px'} textAlign={'center'}>
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
      >
        Tidak Mempunyai Akun?{' '}
        <Link href={'/daftar'} fontWeight={'bold'} color={'primary'}>
          Daftar Disini
        </Link>
      </Text>
    </Box>
  );
}

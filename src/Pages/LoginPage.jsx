import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  HStack,
  Input,
  Text,
  Link,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  Checkbox,
} from '@chakra-ui/react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Box id={'appContainer'}>
      <Text
        textAlign={'center'}
        fontSize={'26px'}
        fontWeight={'bold'}
        pt={'64px'}
        mb={'8px'}
      >
        Selamat Datang di RSPWDC
      </Text>
      <Text textAlign={'center'} mb={'32px'}>
        Silahkan masukkan akun Anda dengan
      </Text>
      <Box px={'16px'}>
        <InputGroup mb={'16px'}>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={EmailOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} placeholder="E-mail" />
        </InputGroup>
        <InputGroup mb={'16px'}>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={LockOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} type="password" placeholder="Kasa Sandi" />
        </InputGroup>
      </Box>
      <HStack px={'16px'} justifyContent={'space-between'}>
        <Checkbox>
          <Text fontSize={'13px'}>Ingat Saya</Text>
        </Checkbox>
        <Link href={'/lupakatasandi'}>
          <Text fontSize={'13px'} fontWeight={'bold'} color={'primary'}>
            Lupa kata sandi?
          </Text>
        </Link>
      </HStack>
      <Box p={'16px'}>
        <Button
          onClick={() => {
            navigate('/home');
          }}
          className={'primaryBtn'}
          w={'100%'}
        >
          MASUK
        </Button>
      </Box>
      <Text fontSize={'13px'} textAlign={'center'}>
        Dengan mendaftar, saya telah menyetujui
      </Text>
      <Text fontSize={'13px'} textAlign={'center'}>
        <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
          Ketentuan Layanan
        </span>{' '}
        dan{' '}
        <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
          Kebijakan Kami
        </span>
      </Text>

      <Text
        position={'fixed'}
        bottom={'32px'}
        left={'0'}
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

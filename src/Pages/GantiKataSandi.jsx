import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Input,
  Text,
  // Link,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  HStack,
} from '@chakra-ui/react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

export default function GantiKataSandi() {
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
          Ganti Kata Sandi
        </Text>
      </HStack>

      <Text textAlign={'center'} mb={'16px'}>
        Silahkan masukkan kata sandi baru Anda
      </Text>
      <Box px={'16px'}>
        <InputGroup mb={'16px'}>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={LockOutlinedIcon} />
          </InputLeftElement>
          <Input
            className={'input'}
            type={'password'}
            placeholder="Kata sandi baru"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={LockOutlinedIcon} />
          </InputLeftElement>
          <Input
            className={'input'}
            type={'password'}
            placeholder="Konfirmasi kata sandi"
          />
        </InputGroup>
      </Box>
      <Box p={'16px'}>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          className={'primaryBtn'}
          w={'100%'}
        >
          GANTI KATA SANDI
        </Button>
      </Box>
    </Box>
  );
}

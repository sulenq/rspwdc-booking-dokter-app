import React from 'react';

import {
  Box,
  Input,
  Text,
  Link,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  VStack,
  HStack,
  ModalFooter,
} from '@chakra-ui/react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const Daftar = props => {
    const { isOpen, onOpen } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen} className={'primaryBtn mainBtn'} w={'100%'}>
          DAFTAR
        </Button>

        <Modal isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent mx={'16px'}>
            <ModalBody>
              <VStack py={'16px'}>
                <HStack
                  bg={'primary'}
                  borderRadius={'100%'}
                  h={'104px'}
                  justifyContent={'center'}
                  w={'104px'}
                  mb={'8px'}
                >
                  <Icon
                    fontSize={'64px'}
                    color={'white !important'}
                    as={CheckRoundedIcon}
                  />
                </HStack>
                <Text fontSize={'26px'} fontWeight={'bold'} color={'primary'}>
                  Daftar Akun Berhasil
                </Text>
                <Text textAlign={'center'} px={'48px'}>
                  Segera verifikasi aktivasi akun Anda yang sudah kami kirim
                  lewat E-mail yang Anda daftarkan
                </Text>
              </VStack>
            </ModalBody>
            <ModalFooter px={'16px'}>
              <Button
                onClick={() => {
                  navigate('/login');
                }}
                w={'100%'}
                h={'50px'}
                className="primaryBtn"
              >
                MASUK
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

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
        Silahkan daftar di bawah ini dengan
      </Text>
      <Box px={'16px'}>
        <InputGroup mb={'16px'}>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={ArticleOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} placeholder="Nomor Rekam Medis" />
        </InputGroup>
        <InputGroup mb={'16px'}>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={PersonOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} placeholder="Username" />
        </InputGroup>
        <InputGroup mb={'16px'}>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={EmailOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} placeholder="E-mail" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement mt={'5px'} pointerEvents="none">
            <Icon opacity={0.3} as={LockOutlinedIcon} />
          </InputLeftElement>
          <Input className={'input'} type="password" placeholder="Kasa Sandi" />
        </InputGroup>
      </Box>
      <Box p={'16px'}>
        <Daftar />
      </Box>
      <Text fontSize={'13px'} textAlign={'center'}>
        Dengan masuk, saya telah menyetujui
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
        w={'100%'}
        fontSize={'14px'}
        textAlign={'center'}
        left={'0'}
      >
        Sudah Mempunyai Akun?{' '}
        <Link href={'/login'} fontWeight={'bold'} color={'primary'}>
          Masuk Disini
        </Link>
      </Text>
    </Box>
  );
}

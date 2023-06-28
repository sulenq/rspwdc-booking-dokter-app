import React from 'react';

import {
  Box,
  Text,
  Icon,
  HStack,
  Button,
  VStack,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

import { Nav } from '../myComponents';

export default function Riwayat() {
  const DetailRiwayat = props => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
      <>
        <Box p={'16px'} onClick={onOpen}>
          <Box p={'16px'} className={'bs'}>
            <HStack justifyContent={'space-between'} mb={'16px'}>
              <Text fontWeight={'bold'}>Alexander Wang</Text>
              <Text>16:53 WIB</Text>
            </HStack>
            <HStack
              fontSize={'14px'}
              justifyContent={'space-between'}
              mb={'16px'}
            >
              <Box>
                <Text>No. Rekam Medis</Text>
                <Text fontWeight={'bold'}>1234567890</Text>
              </Box>
              <Box>
                <Text>No. Transaksi</Text>
                <Text fontWeight={'bold'}>1234567890</Text>
              </Box>
              <Box>
                <Text>Metode Pembayaran</Text>
                <Text fontWeight={'bold'}>Gopay</Text>
              </Box>
            </HStack>
            <HStack justifyContent={'space-between'} color={'green'}>
              <Text w={'100%'} textAlign={'center'}>
                *Transaksi berhasil
              </Text>
              <Text textAlign={'right'} fontWeight={'bold'}>
                Rp102.500
              </Text>
            </HStack>
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
          <ModalContent>
            <ModalCloseButton top={'8px'} left={'8px'} />
            <ModalBody px={'16px'}>
              <VStack>
                <Text
                  fontSize={'26px'}
                  fontWeight={'800'}
                  mt={'24px'}
                  textAlign={'center'}
                >
                  No. Antrian
                </Text>
                <Text fontSize={'37px'} fontWeight={'800'} textAlign={'center'}>
                  01
                </Text>
                <VStack>
                  <Image src={'qr.png'} />
                </VStack>
                <HStack mb={'16px'}>
                  <Text>ID Transaksi :</Text>
                  <Text fontWeight={'600'}>111122222223333</Text>
                  <Icon
                    fontSize={'16px'}
                    color={'primary'}
                    as={ContentCopyRoundedIcon}
                  />
                </HStack>
                <Text px={'64px'} textAlign={'center'} mb={'16px'}>
                  Silahkan scan barcode ini pada saat anda antri untuk periksa
                </Text>
                <Text
                  mb={'16px'}
                  color={'green'}
                  fontWeight={'bold'}
                  fontSize={'22px'}
                >
                  Transaksi Berhasil
                </Text>
              </VStack>
              <VStack gap={'8px'}>
                <HStack mb={'8px'} w={'100%'} justifyContent={'space-between'}>
                  <Text fontWeight={'700'}>Alexander Wang</Text>
                  <Text>16:53 WIB</Text>
                </HStack>
                <HStack
                  fontSize={'13px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Text>Tanggal Booking</Text>
                  <Text fontWeight={'600'}>20 Nov 2022</Text>
                </HStack>
                <HStack
                  fontSize={'13px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Text>Tanggal Periksa</Text>
                  <Text fontWeight={'600'}>Senin, 28 Nov 2022</Text>
                </HStack>
                <HStack
                  fontSize={'13px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Text>Jam Periksa</Text>
                  <Text fontWeight={'600'}>08.00 - 11.00 WIB</Text>
                </HStack>
                <HStack
                  fontSize={'13px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Text>No. Rekam Medis</Text>
                  <Text fontWeight={'600'}>1234567890</Text>
                </HStack>
                <HStack
                  fontSize={'13px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Text>No. Transaksi</Text>
                  <Text fontWeight={'600'}>3421234123</Text>
                </HStack>
                <HStack
                  fontSize={'13px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Text>Metode Pembayaran</Text>
                  <Text fontWeight={'600'}>Gopay</Text>
                </HStack>
              </VStack>
            </ModalBody>
            <ModalFooter px={'16px'}>
              <HStack w={'100%'}>
                <Button w={'50%'} colorScheme={'red'} variant={'outline'}>
                  Batalkan
                </Button>
                <Button w={'50%'} colorScheme={'blue'} variant={'outline'}>
                  Ubah Jadwal
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <VStack id={'appContainer'}>
      <Nav />
      <HStack p={'10px 16px'}>
        <Text fontSize={'26px'} fontWeight={'bold'}>
          Riwayat
        </Text>
      </HStack>
      <Box h={'100%'} w={'100%'} overflow={'auto'}>
        <HStack px={'16px'} mb={'16px'}>
          <HStack
            w={'50%'}
            justifyContent={'space-between'}
            p={'16px'}
            className={'bs'}
          >
            <Text>Tanggal</Text>
            <Icon as={KeyboardArrowDownOutlinedIcon} />
          </HStack>
          <HStack
            w={'50%'}
            justifyContent={'space-between'}
            p={'16px'}
            className={'bs'}
          >
            <Text>Metode</Text>
            <Icon as={KeyboardArrowDownOutlinedIcon} />
          </HStack>
        </HStack>
        <Text px={'16px'} fontWeight={'bold'}>
          Senin, 28 November 2022
        </Text>
        <DetailRiwayat />
      </Box>
    </VStack>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Text,
  Button,
  Icon,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react';

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export default function Pembayaran() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [nrm, setNrm] = useState('');
  const [nrm2, setNrm2] = useState('');

  const pembayaran = [
    { name: 'Credit Card', no: '+1 6060 **** 11', src: '1.png' },
    { name: 'Gopay', no: '+6285 7777 1111', src: '2.png' },
  ];

  const TambahNrm = props => {
    return (
      <>
        <HStack p={'16px'} borderTop={'1px solid var(--gray)'}>
          <Icon as={AddOutlinedIcon} />
          <Text>Tambahkan No. Rekam Medis</Text>
        </HStack>
      </>
    );
  };

  return (
    <VStack id={'appContainer'} pb={'0px !important'}>
      <HStack p={'10px 16px'} mb={'12px'}>
        <Icon
          onClick={() => {
            navigate('/reservasi');
          }}
          fontSize={'28px'}
          cursor={'pointer'}
          as={KeyboardArrowLeftOutlinedIcon}
        />
        <Text fontSize={'26px'} fontWeight={'800'}>
          Pembayaran
        </Text>
      </HStack>
      <VStack
        w={'100%'}
        alignItems={'flex-start'}
        h={'100%'}
        px={'16px'}
        gap={null}
      >
        <Text mb={'8px'} fontWeight={'600'}>
          Pilih No.Rekam Medis Pasien
        </Text>
        <HStack
          className={'input'}
          HStack
          w={'100%'}
          onClick={() => {
            setDropdown(!dropdown);
          }}
          pl={'16px'}
          pr={'12px'}
          mb={'16px'}
          justifyContent={'space-between'}
          position={'relative'}
        >
          <HStack w={'100%'}>
            <Text opacity={!nrm && 0.5}>
              {nrm ? nrm : 'Silahkan pilih No. Rekam Medis'}
            </Text>
            <Text opacity={0.5}>{nrm2 && nrm2}</Text>
          </HStack>

          <Icon
            color={'primary'}
            as={
              !dropdown
                ? KeyboardArrowDownOutlinedIcon
                : KeyboardArrowUpOutlinedIcon
            }
          />
          <Box
            position={'absolute'}
            left={'-1px'}
            top={'50px'}
            // display={dropdown ? 'block' : 'none'}
            transition={'0.3s'}
            mt={'8px'}
            borderRadius={'8px'}
            className={'bs'}
            overflow={'hidden'}
            bg={'white'}
            zIndex={2}
            w={'calc(100% + 2px)'}
            opacity={dropdown ? 1 : 0}
            pointerEvents={dropdown ? 'normal' : 'none'}
          >
            <HStack
              borderRadius={'8px 8px 0 0'}
              className={'dropDownItem'}
              p={'16px'}
              onClick={() => {
                setNrm('Alexander Wang');
                setNrm2('(01223366)');
              }}
            >
              <Text>Alexander Wang</Text>
              <Text opacity={0.5}>(01223366)</Text>
            </HStack>
            <HStack
              onClick={() => {
                setNrm('Kim Taehyung');
                setNrm2('(00112255)');
              }}
              className={'dropDownItem'}
              p={'16px'}
            >
              <Text>Kim Taehyung</Text>
              <Text opacity={0.5}>(00112255)</Text>
            </HStack>
            <TambahNrm />
          </Box>
        </HStack>
        <Text mb={'8px'} fontWeight={'600'}>
          Pilih Pembayaran yang akan Anda gunakan
        </Text>
        <Box>
          {pembayaran?.map((p, index) => {
            return (
              <HStack key={index}>
                <Image src={`./pembayaran/${p?.src}`} />
                <Box p={'13px'}>
                  <Text>{p?.name}</Text>
                  <Text>{p?.no}</Text>
                </Box>
              </HStack>
            );
          })}
        </Box>
      </VStack>
      <Box p={'16px'} w={'100%'}>
        <Button
          // onClick={() => {
          //   navigate('/verifikasi');
          // }}
          className={'primaryBtn'}
          w={'100%'}
        >
          BERIKUTNYA
        </Button>
      </Box>
    </VStack>
  );
}

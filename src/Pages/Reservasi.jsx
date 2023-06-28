import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import {
  Box,
  Text,
  Image,
  Icon,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  VStack,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';

import { Nav } from '../myComponents';

export default function Reservasi() {
  const navigate = useNavigate();

  const filterKategori = [
    {
      name: 'Semua',
    },
    {
      name: 'Umum',
    },
    {
      name: 'Gigi',
    },
    {
      name: 'Mata',
    },
    {
      name: 'Anak',
    },
    {
      name: 'Tulang',
    },
  ];
  const listDokter = [
    {
      name: 'Adyaputra Indrapradana, drg, Sp. BM',
      spesialis: 'Dokter Sp. Bedah Mulut',
      src: '1.png',
    },
    {
      name: 'Albert Martius Hadiyono,dr',
      spesialis: 'Dokter Umum',
      src: '2.png',
    },
    {
      name: 'Albertus Fredi Susanto, drg, Sp.Pros,M.HKes',
      spesialis: 'Dokter Gigi',
      src: '3.png',
    },
    {
      name: 'Amadea Ivana Hartanto, dr',
      spesialis: 'Dokter Umum',
      src: '4.png',
    },
    {
      name: 'Andi Sugiarto, Sp.RM, dr',
      spesialis: 'Dokter Rehabilitasi Medik',
      src: '5.png',
    },
  ];
  const jadwalPraktek = [
    {
      day: 'Sen',
      date: '28',
      month: 'Nov',
      avail: true,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
          avail: false,
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
          avail: true,
        },
      ],
    },
    {
      day: 'Sel',
      date: '29',
      month: 'Nov',
      avail: true,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
        },
      ],
    },
    {
      day: 'Rab',
      date: '30',
      month: 'Nov',
      avail: false,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
        },
      ],
    },
    {
      day: 'Kam',
      date: '1',
      month: 'Nov',
      avail: false,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
        },
      ],
    },
    {
      day: 'Jum',
      date: '2',
      month: 'Nov',
      avail: false,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
        },
      ],
    },
    {
      day: 'Sab',
      date: '3',
      month: 'Nov',
      avail: false,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
        },
      ],
    },
    {
      day: 'Min',
      date: '4',
      month: 'Nov',
      avail: true,
      jadwal: [
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '100/100',
          time: '08:00 - 11:00 WIB',
        },
        {
          date: '28 November 2022',
          place: 'Klinik Gigi',
          kuota: '70/100',
          time: '13:00 - 17:30 WIB',
        },
      ],
    },
  ];

  const BookingModal = props => {
    const item = props?.item;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [checked, setChecked] = useState(false);

    return (
      <>
        <Button onClick={onOpen} className={'primaryBtn'} h={'32px'}>
          Booking
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInRight"
          size={'full'}
        >
          <ModalContent className={'modalContent'}>
            <Icon
              onClick={onClose}
              position={'absolute'}
              top={'16px'}
              left={'16px'}
              borderRadius={'100%'}
              variant={'ghost'}
              as={KeyboardArrowLeftOutlinedIcon}
            />
            <ModalBody px={'0'} maxW={'640px'}>
              <VStack px={'16px'} pt={'64px'} pb={'32px'}>
                <Image src={'./daftarDokter/' + item?.src} />
                <Text
                  fontWeight={'bold'}
                  fontSize={'22px'}
                  mb={'8px'}
                  textAlign={'center'}
                >
                  {item?.name}
                </Text>
                <Text mb={'16px'}>{item?.spesialis}</Text>
              </VStack>
              <Box>
                <Text
                  px={'16px'}
                  fontWeight={'bold'}
                  fontSize={'22px'}
                  mb={'16px'}
                >
                  Pilih Jadwal Praktek
                </Text>
                <Box overflow={'auto'} w={'100%'} mb={'8px'}>
                  <HStack px={'16px'} w={'max-content'}>
                    {jadwalPraktek?.map((j, index) => {
                      return (
                        <VStack
                          className={index === 0 && 'selectedJadwalPraktek'}
                          key={index}
                          gap={'4px'}
                          p={'8px 12px'}
                          border={'2px solid var(--gray)'}
                          borderRadius={'8px'}
                          opacity={!j?.avail && 0.3}
                          bg={!j?.avail && '#aaa'}
                        >
                          <Text>{j?.day}</Text>
                          <Text fontWeight={'bold'}>{j?.date}</Text>
                          <Text>{j?.month}</Text>
                        </VStack>
                      );
                    })}
                  </HStack>
                </Box>
              </Box>
              <VStack px={'16px'} w={'100%'} gap={'16px'}>
                {jadwalPraktek[0]?.jadwal?.map((j, index) => {
                  return (
                    <HStack
                      key={index}
                      onClick={() => {
                        if (j?.avail) {
                          setChecked(!checked);
                        }
                      }}
                      w={'100%'}
                      p={'16px'}
                      border={'2px solid var(--gray)'}
                      borderRadius={'8px'}
                      opacity={!j?.avail && 0.3}
                      justifyContent={'space-between'}
                      bg={!j?.avail && '#aaa'}
                    >
                      <HStack>
                        <VStack
                          gap={'4px'}
                          p={'8px 12px'}
                          border={'2px solid var(--gray)'}
                          borderRadius={'8px'}
                        >
                          <Text>{jadwalPraktek[0]?.day}</Text>
                          <Text fontWeight={'bold'}>
                            {jadwalPraktek[0]?.date}
                          </Text>
                          <Text>{jadwalPraktek[0]?.month}</Text>
                        </VStack>
                        <Box>
                          <Text fontSize={'17px'} fontWeight={'bold'}>
                            {j?.date}
                          </Text>
                          <Text fontSize={'13px'}>{j?.place}</Text>
                          <Text fontSize={'13px'}>{j?.kuota}</Text>
                          <Text fontSize={'13px'}>{j?.time}</Text>
                        </Box>
                      </HStack>
                      <Box
                        className={'circleCheckbox'}
                        border={
                          j?.avail && checked && '6px solid var(--primary)'
                        }
                      ></Box>
                    </HStack>
                  );
                })}
              </VStack>
            </ModalBody>
            <ModalFooter px={'16px'}>
              <Box w={'100%'}>
                <Pembayaran checked={checked} item={item} />
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const TambahNrm = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <HStack onClick={onOpen} p={'16px'} borderTop={'1px solid var(--gray)'}>
          <Icon as={AddOutlinedIcon} />
          <Text>Tambahkan No. Rekam Medis</Text>
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
          <ModalOverlay />
          <ModalContent className={'tambahnrm'}>
            <ModalCloseButton top={'16px'} />
            <ModalHeader p={'16px'}>Masukan No. Rekam Medis</ModalHeader>
            <ModalBody p={'16px'} pt={'0 !important'}>
              <Input
                className={'input'}
                placeholder={'No. Rekam Medis Pasien'}
              />
              <Text color={'primary'} fontSize={'13px'}>
                Isikan No. Rekam Medis milik pasien yang akan booking online di
                APlikasi ini.
              </Text>
            </ModalBody>
            <ModalFooter p={'16px'}>
              <Button className={'primaryBtn'} w={'100%'}>
                SIMPAN
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const Pembayaran = props => {
    const [dropdown, setDropdown] = useState(false);
    const [nrm, setNrm] = useState('');
    const [nrm2, setNrm2] = useState('');
    const [metodePembayaran, setMetodePmebayaran] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const pembayaran = [
      { name: 'Credit Card', no: '+1 6060 **** 11', src: '1.png' },
      { name: 'Gopay', no: '+6285 7777 1111', src: '2.png' },
    ];

    return (
      <>
        <Button
          className={'primaryBtn mainBtn'}
          onClick={onOpen}
          isDisabled={!props?.checked}
          w={'100%'}
        >
          BOOKING SEKARANG
        </Button>
        <Modal
          isOpen={isOpen}
          onClos={onClose}
          motionPreset="slideInRight"
          size={'full'}
        >
          <ModalContent>
            <Icon
              onClick={onClose}
              position={'absolute'}
              top={'18px'}
              left={'16px'}
              borderRadius={'100%'}
              variant={'ghost'}
              as={KeyboardArrowLeftOutlinedIcon}
            />
            <ModalBody p={'0'}>
              <HStack p={'10px 16px'} mb={'12px'}>
                <Text fontSize={'26px'} fontWeight={'800'} ml={'36px'}>
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
                <Box w={'100%'}>
                  {pembayaran?.map((p, index) => {
                    return (
                      <HStack
                        key={index}
                        onClick={() => {
                          setMetodePmebayaran(p?.name);
                        }}
                        className={'bs'}
                        w={'100%'}
                        mb={'16px'}
                        position={'relative'}
                        justifyContent={'space-between'}
                        pr={'16px'}
                      >
                        <HStack>
                          <Image
                            h={'50px'}
                            px={'16px'}
                            src={`./pembayaran/${p?.src}`}
                          />
                          <Box pl={'0 !important'} p={'13px'}>
                            <Text fontWeight={'600'}>{p?.name}</Text>
                            <Text>{p?.no}</Text>
                          </Box>
                        </HStack>
                        <Box
                          className={'circleCheckbox'}
                          border={
                            metodePembayaran === p?.name &&
                            '6px solid var(--primary)'
                          }
                        ></Box>
                      </HStack>
                    );
                  })}
                </Box>
              </VStack>
            </ModalBody>
            <ModalFooter p={'0'}>
              <Box p={'16px'} w={'100%'}>
                <DetailPembayaran
                  item={props?.item}
                  isDisabled={nrm && nrm2 && metodePembayaran ? false : true}
                />
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const DetailPembayaran = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button
          className={'primaryBtn mainBtn'}
          onClick={onOpen}
          isDisabled={props?.isDisabled}
          w={'100%'}
        >
          BERIKUTNYA
        </Button>
        <Modal
          isOpen={isOpen}
          onClos={onClose}
          motionPreset="slideInRight"
          size={'full'}
        >
          <ModalContent>
            <Icon
              onClick={onClose}
              position={'absolute'}
              top={'18px'}
              left={'16px'}
              borderRadius={'100%'}
              variant={'ghost'}
              as={KeyboardArrowLeftOutlinedIcon}
            />
            <ModalBody p={'0'}>
              <HStack p={'10px 16px'} mb={'12px'}>
                <Text fontSize={'26px'} fontWeight={'800'} ml={'36px'}>
                  Detail Pembayaran
                </Text>
              </HStack>
              <VStack
                w={'100%'}
                alignItems={'flex-start'}
                h={'100%'}
                px={'16px'}
                gap={null}
              >
                <HStack p={'16px'} className={'bs'} w={'100%'} mb={'16px'}>
                  <Image src={'./daftarDokter/' + props?.item?.src} />
                  <Box px={'16px'}>
                    <Text fontSize={'17px'} fontWeight={'600'}>
                      {props?.item?.name}
                    </Text>
                    <Text fontSize={'15px'}>Klinik Gigi</Text>
                    <Text fontSize={'15px'}>Senin, 28 November 2022</Text>
                    <Text fontSize={'15px'}>08:00 - 11:00 WIB</Text>
                  </Box>
                </HStack>
                <Text fontSize={'22px'} fontWeight={'bold'} mb={'16px'}>
                  Identitas Pasien
                </Text>
                <Box p={'16px'} className={'bs'} w={'100%'} mb={'16px'}>
                  <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                    mb={'8px'}
                  >
                    <Text fontSize={'17px'}>No. Rekam Medis</Text>
                    <Text fontSize={'17px'} fontWeight={'bold'}>
                      01223366
                    </Text>
                  </HStack>
                  <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                    mb={'8px'}
                  >
                    <Text fontSize={'17px'}>Nama</Text>
                    <Text fontSize={'17px'} fontWeight={'bold'}>
                      Alexander Wang
                    </Text>
                  </HStack>
                  <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                    mb={'8px'}
                  >
                    <Text fontSize={'17px'}>Jenis Kelamin</Text>
                    <Text fontSize={'17px'} fontWeight={'bold'}>
                      Perempuan
                    </Text>
                  </HStack>
                  <HStack w={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={'17px'}>Tanggal Lahir</Text>
                    <Text fontSize={'17px'} fontWeight={'bold'}>
                      26 Maret 1992
                    </Text>
                  </HStack>
                </Box>
                <Text fontSize={'22px'} fontWeight={'bold'} mb={'16px'}>
                  Biaya Konsultasi
                </Text>
                <Box p={'16px'} className={'bs'} w={'100%'} mb={'16px'}>
                  <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                    mb={'8px'}
                  >
                    <Text fontSize={'17px'}>No. Rekam Medis</Text>
                    <Text fontSize={'17px'} fontWeight={'bold'}>
                      01223366
                    </Text>
                  </HStack>
                  <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                    pb={'8px'}
                    // borderBottom={'1px dashed var(--primary-a)'}
                  >
                    <Text fontSize={'17px'}>Nama</Text>
                    <Text fontSize={'17px'} fontWeight={'bold'}>
                      Alexander Wang
                    </Text>
                  </HStack>
                  <Image src={'./dashedLine.png'} />
                  <HStack
                    pt={'8px'}
                    w={'100%'}
                    justifyContent={'space-between'}
                  >
                    <Text fontSize={'22px'} fontWeight={'bold'}>
                      Total
                    </Text>
                    <Text fontSize={'22px'} fontWeight={'bold'}>
                      Rp 102.500
                    </Text>
                  </HStack>
                </Box>
                <HStack
                  className={'bs'}
                  w={'100%'}
                  mb={'16px'}
                  position={'relative'}
                  justifyContent={'space-between'}
                  pr={'16px'}
                >
                  <HStack>
                    <Image h={'50px'} px={'16px'} src={`./pembayaran/2.png`} />
                    <Box pl={'0 !important'} p={'13px'}>
                      <Text fontWeight={'600'}>Gopay</Text>
                      <Text opacity={0.5}>+6285 7777 1111</Text>
                    </Box>
                  </HStack>
                  <Button className={'primaryBtn'} h={'32px'}>
                    Ubah
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
            <ModalFooter p={'0'}>
              <Box p={'16px'} w={'100%'}>
                <Bayar />
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const Bayar = props => {
    const { isOpen, onOpen } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen} className={'primaryBtn mainBtn'} w={'100%'}>
          BAYAR
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
                  Booking Berhasil
                </Text>
                <Text textAlign={'center'} px={'48px'}>
                  Pembayaran Anda telah diproses! Silakan cek detail transaksi
                  di Halaman Riwayat Pesanan
                </Text>
              </VStack>
            </ModalBody>
            <ModalFooter px={'16px'}>
              <LihatBarcode />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const LihatBarcode = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen} w={'100%'} className={'primaryBtn mainBtn'}>
          LIHAT BARCODE
        </Button>
        <Modal
          isOpen={isOpen}
          onClos={onClose}
          motionPreset="slideInRight"
          size={'full'}
        >
          <ModalContent>
            <ModalBody p={'0'}>
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
                <HStack w={'100%'} px={'16px'}>
                  <Button
                    variant={'outline'}
                    colorScheme={'blue'}
                    border={'2px solid var(--primary)'}
                    color={'primary'}
                    w={'50%'}
                    leftIcon={<FileDownloadOutlinedIcon />}
                  >
                    Unduh
                  </Button>
                  <Button
                    variant={'outline'}
                    colorScheme={'blue'}
                    border={'2px solid var(--primary)'}
                    color={'primary'}
                    w={'50%'}
                    leftIcon={<ShareOutlinedIcon />}
                  >
                    Berbagi
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
            <ModalFooter p={'0'}>
              <Box p={'16px'} w={'100%'}>
                <Button
                  onClick={() => {
                    navigate('/riwayat');
                  }}
                  w={'100%'}
                  className={'mainBtn primaryBtn'}
                >
                  LIHAT RIWAYAT
                </Button>
              </Box>
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
          Daftar Dokter
        </Text>
      </HStack>
      <Box h={'100%'} w={'100%'} overflow={'auto'}>
        <Box px={'16px'}>
          <InputGroup mb={'16px'}>
            <InputLeftElement mt={'5px'} pointerEvents="none">
              <Icon as={SearchOutlinedIcon} />
            </InputLeftElement>
            <Input
              className={'input'}
              type={'password'}
              placeholder="Cari dokter spesialis, jadwal dokter, dll"
            />
          </InputGroup>
        </Box>
        <Box overflow={'auto'} px={'16px'} mb={'16px'}>
          <HStack w={'max-content'}>
            {filterKategori?.map((f, index) => {
              return (
                <Box key={index} className={'kategori'}>
                  <Text>{f?.name}</Text>
                </Box>
              );
            })}
          </HStack>
        </Box>
        <VStack
          gap={'16px'}
          w={'100%'}
          overflow={'auto'}
          px={'16px'}
          mb={'24px'}
        >
          {listDokter?.map((f, index) => {
            return (
              <HStack
                w={'100%'}
                key={index}
                gap={'16px'}
                className={'listDokter'}
              >
                <Image src={'./daftarDokter/' + f?.src} />
                <Box key={index}>
                  <Text fontWeight={'bold'} fontSize={'17px'} mb={'8px'}>
                    {f?.name}
                  </Text>
                  <Text mb={'8px'}>{f?.spesialis}</Text>
                  <BookingModal item={f} />
                </Box>
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </VStack>
  );
}

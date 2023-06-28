import { useLocation } from 'react-router-dom';

import { HStack, VStack, Icon, Text, Link } from '@chakra-ui/react';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Nav = props => {
  const navItems = [
    { name: 'Beranda', icon: HomeOutlinedIcon, link: '/home' },
    { name: 'Reservasi', icon: CalendarMonthOutlinedIcon, link: '/reservasi' },
    { name: 'Riwayat', icon: HistoryOutlinedIcon, link: '/riwayat' },
    { name: 'Profil', icon: PersonOutlinedIcon, link: '' },
  ];
  const location = useLocation();
  const activeNav = location.pathname;

  return (
    <HStack className={'nav'}>
      {navItems?.map((n, index) => {
        return (
          <Link key={index} href={n?.link} textDecoration={'none !important'}>
            <VStack gap={'4px'} p={'4px 24px'} pt={'8px'}>
              <Icon
                className={activeNav === n?.link && 'selectedNav'}
                fontSize={'28px'}
                as={n?.icon}
              />
              <Text
                fontSize={'13px'}
                fontWeight={activeNav === n?.link && 'bold'}
              >
                {n?.name}
              </Text>
            </VStack>
          </Link>
        );
      })}
    </HStack>
  );
};

export { Nav };

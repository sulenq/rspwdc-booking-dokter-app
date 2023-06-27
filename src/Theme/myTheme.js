import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    primary: '#006AD5',
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#18191b' : 'white',
      },
    }),
  },
});

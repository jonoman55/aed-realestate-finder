import { Box } from '@chakra-ui/react';

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    <a href="https://github.com/jonoman55" target="_blank" rel="noreferrer">© JC Dev {new Date().getFullYear()}.</a>
  </Box>
);

export default Footer;
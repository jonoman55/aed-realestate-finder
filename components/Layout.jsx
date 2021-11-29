import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>UAE Real Estate Finder</title>
            <meta name="description" content="Find, Buy and Own Your Dream Home or Search for Rental Homes in the UAE." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);
 
export default Layout;
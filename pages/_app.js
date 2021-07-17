import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Layout from "@layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

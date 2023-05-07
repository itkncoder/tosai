import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";

import { Inter } from 'next/font/google';
 
const inter = Inter({ subsets: ['latin'] });
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <CSSReset />
                    <Component {...pageProps} />
                </ColorModeProvider>
            </ThemeProvider>
    </main>
  );
}
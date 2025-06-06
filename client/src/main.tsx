import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index.ts'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient() ;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client = {queryClient} >
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import './styles/globals.css';
import AppRoute from './routes/index.tsx';
import { store } from './app/store.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient.ts';
// import AuthInitializer from './app/AuthInitializer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <AuthInitializer /> */}
        <AppRoute />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);

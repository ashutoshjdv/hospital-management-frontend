import { useEffect } from 'react';
import { getAuth } from '../features/auth/storage/AuthStorage';
import { setCredentials } from '../features/auth/store/AuthSlice';
import { useAppDispatch } from './hooks/redux';

function AuthInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();

    if (auth) {
      dispatch(setCredentials(auth));
    }
  }, [dispatch]);

  return null;
}

export default AuthInitializer;

import { AppRouter } from './router/AppRouter.jsx';
import AuthProvider from './auth/context/AuthProvider.jsx';

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </>
  );
};

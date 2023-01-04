import React, { useEffect, FC } from 'react';

// services
import authService from 'services/authService';

// actions
import { setUserData } from 'actions/auth.action';
import { useAppDispatch } from 'hooks/useDispatch';

const Auth: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    function initAuth() {
      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = authService.getUser();
        const parseUser = JSON.parse(user);
        dispatch(setUserData(parseUser.username, parseUser.roleUser));
      }
    }
    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;

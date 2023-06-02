import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext.jsx';
import { authReducer } from './authReducer.jsx';
import { types } from '../types/types.js';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user,
  };
};

const AuthProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(authReducer, {}, init);

  const login = async (name = '') => {

    const user = { id: 123, name };

    const action = {
      type: types.login,
      payload: user
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout,
    };
    dispatch(action)
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

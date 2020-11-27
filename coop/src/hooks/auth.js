import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Coop:token');
    const email = localStorage.getItem('@Coop:email');
    const id = localStorage.getItem('@Coop:id');

    if (token && email) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, email, id };
    }

    return {};
  });

  const signIn = useCallback(async (data) => {
    const response = await api.post('/usuarios/auth',{
      email: data.email,
      senha: data.senha
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const { token, email, id } = response.data;

    localStorage.setItem('@Coop:token', token);
    localStorage.setItem('@Coop:email', email);
    localStorage.setItem('@Coop:id', id);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, email, id });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Coop:token');
    localStorage.removeItem('@Coop:email');
    localStorage.removeItem('@Coop:id');

    setData({});
  }, []);

  const updateUser = useCallback(
    (email) => {
      localStorage.setItem('@Coop:email', email);

      setData({
        token: data.token,
        email,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ email: data.email, id: data.id, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

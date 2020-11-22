import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Coop:token');
    const email = localStorage.getItem('@Coop:email');

    if (token && email) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, email: JSON.parse(email) };
    }

    return {};
  });

  const signIn = useCallback(async (data) => {
    const response = await api.post('/usuarios/auth',
      JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log(response.data);

    const { token, email } = response.data;

    localStorage.setItem('@Coop:token', token);
    localStorage.setItem('@Coop:email', JSON.stringify(email));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, email });

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Coop:token');
    localStorage.removeItem('@Coop:email');

    setData({});
  }, []);

  const updateUser = useCallback(
    (email) => {
      localStorage.setItem('@Coop:email', JSON.stringify(email));

      setData({
        token: data.token,
        email,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ email: data.email, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

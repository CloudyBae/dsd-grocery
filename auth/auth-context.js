import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext({
  token: '',
  userId: '2',
  isLoggedIn: false,
  login: (userId, token) => {},
  logout: () => {},
  base_url: 'http://localhost:8000',
});

// export const AuthContextProvider = (props) => {
//   const [userId, setUserId] = useState('');
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const storedUserId = await AsyncStorage.getItem('userId');
//         const storedToken = await AsyncStorage.getItem('token');
//         if (storedUserId && storedToken) {
//           setUserId(storedUserId);
//           setToken(storedToken);
//         }
//       } catch (error) {
//         console.error('Error loading user data:', error);
//       }
//     };

//     loadUserData();
//   }, []);

//   const userIsLoggedIn = !!token;

//   const logoutHandler = async () => {
//     try {
//       setUserId('');
//       setToken('');
//       await AsyncStorage.removeItem('userId');
//       await AsyncStorage.removeItem('token');
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const loginHandler = async (userId, token) => {
//     try {
//       setUserId(userId);
//       setToken(token);
//       await AsyncStorage.setItem('userId', userId);
//       await AsyncStorage.setItem('token', token);
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   const base_url = 'http://127.0.0.1:8000';
//   const contextValue = {
//     token: token,
//     userId: userId,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//     base_url: base_url,
//   };

export const AuthContextProvider = (props) => {
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      // Load user data from AsyncStorage
    };

    loadUserData();
  }, []);

  const makeCurrentUserSuperuser = async () => {
    try {
      const response = await fetch('http://localhost:8000/make_superuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log('User is now a superuser');
      } else {
        console.error('Failed to make user a superuser');
      }
    } catch (error) {
      console.error('Error making user a superuser:', error);
    }
  };

  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: !!token,
    login: loginHandler,
    logout: logoutHandler,
    base_url: base_url,
    makeCurrentUserSuperuser: makeCurrentUserSuperuser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

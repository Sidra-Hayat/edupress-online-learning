import {
  createContext,
  useContext,
  useState,
} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading] = useState(false);

  // Demo login for frontend development only
  const login = (email, password, role = 'student') => {
    if (!email || !password) {
      throw new Error('Please enter your email and password.');
    }

    const demoUser = {
      id: 1,
      name: email.split('@')[0],
      email,
      role,
    };

    setUser(demoUser);
    return demoUser;
  };

  
  const register = (name, email, password, role = 'student') => {
    if (!name || !email || !password) {
      throw new Error('Please complete all required fields.');
    }

    const demoUser = {
      id: Date.now(),
      name,
      email,
      role,
    };

    setUser(demoUser);
    return demoUser;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    role: user?.role ?? null,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider.');
  }

  return context;
}

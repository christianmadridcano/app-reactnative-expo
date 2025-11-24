import { clearSessionFromStorage, saveSessionToStorage } from '@/utils/storage';
import { createContext, useContext, useState } from 'react';

export interface User {
    id: string;
    name: string;
}

interface AuthContextProps {
    user: User | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const EXPECTED_USER = [
    { id: '1', name: 'user@mail.com', password: '1234' },
    { id: '2', name: 'admin@mail.com', password: 'admin' },
]

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
const [user, setUser] = useState<User | null>(null);
    
const login = (username: string, password: string) => {
    const foundUser = EXPECTED_USER.find(u => u.name === username && u.password === password);
        
    if (foundUser) {
            setUser({ id: foundUser.id, name: foundUser.name });
            saveSessionToStorage({ id: foundUser.id, name: foundUser.name });
    } else {
      throw new Error('Login Failed: Invalid username or password.');
    }
  }

  const logout = () => {
    setUser(null);
    clearSessionFromStorage();
   }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
 )
} 

export function useAuth() {
    const context = useContext(AuthContext)
    
    if (!context) {
       throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
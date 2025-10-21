import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  email: string;
  fullName: string;
  role: "patient" | "professional";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface SignupData {
  email: string;
  password: string;
  fullName: string;
  cpf: string;
  phone: string;
  role: "patient" | "professional";
  professionalId?: string;
  specialty?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Chave para armazenar usuários registrados
const USERS_STORAGE_KEY = "healthcare_users";
const USER_STORAGE_KEY = "healthcare_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Verifica se há usuário salvo no localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Função auxiliar para obter todos os usuários cadastrados
  const getRegisteredUsers = (): SignupData[] => {
    const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  };

  // Função auxiliar para salvar usuários cadastrados
  const saveRegisteredUsers = (users: SignupData[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const login = async (email: string, password: string) => {
    // Busca todos os usuários cadastrados
    const registeredUsers = getRegisteredUsers();
    
    // Procura pelo usuário com o email fornecido
    const foundUser = registeredUsers.find(u => u.email === email);
    
    if (!foundUser) {
      throw new Error("Usuário não encontrado. Verifique seu e-mail ou cadastre-se.");
    }
    
    if (foundUser.password !== password) {
      throw new Error("Senha incorreta. Tente novamente.");
    }

    // Login bem-sucedido
    const authenticatedUser: User = {
      id: foundUser.email, // Usando email como ID único
      email: foundUser.email,
      fullName: foundUser.fullName,
      role: foundUser.role,
    };

    setUser(authenticatedUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(authenticatedUser));
    
    // Redireciona para o dashboard
    navigate("/dashboard");
  };

  const signup = async (data: SignupData) => {
    // Busca usuários existentes
    const registeredUsers = getRegisteredUsers();
    
    // Verifica se o email já está cadastrado
    const emailExists = registeredUsers.some(u => u.email === data.email);
    if (emailExists) {
      throw new Error("Este e-mail já está cadastrado. Faça login ou use outro e-mail.");
    }
    
    // Verifica se o CPF já está cadastrado
    const cpfExists = registeredUsers.some(u => u.cpf === data.cpf);
    if (cpfExists) {
      throw new Error("Este CPF já está cadastrado.");
    }
    
    // Adiciona o novo usuário à lista
    const newUsers = [...registeredUsers, data];
    saveRegisteredUsers(newUsers);
    
    // Faz login automático após o cadastro
    const newUser: User = {
      id: data.email,
      email: data.email,
      fullName: data.fullName,
      role: data.role,
    };

    setUser(newUser);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
    
    // Redireciona para o dashboard
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

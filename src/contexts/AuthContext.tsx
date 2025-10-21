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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Verifica se há usuário salvo no localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("healthcare_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulação de login - aceita qualquer email/senha
    // Em produção, isso seria uma chamada real ao backend
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      fullName: "Usuário Demo",
      role: "patient",
    };

    setUser(mockUser);
    localStorage.setItem("healthcare_user", JSON.stringify(mockUser));
    
    // Redireciona para o dashboard
    navigate("/dashboard");
  };

  const signup = async (data: SignupData) => {
    // Simulação de cadastro
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: data.email,
      fullName: data.fullName,
      role: data.role,
    };

    setUser(mockUser);
    localStorage.setItem("healthcare_user", JSON.stringify(mockUser));
    
    // Redireciona para o dashboard
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("healthcare_user");
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

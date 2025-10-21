import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Heart, LogOut, User, Calendar, MessageSquare, Settings } from "lucide-react";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HealthCare+
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{user.fullName}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={logout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Bem-vindo, {user.fullName}!
          </h1>
          <p className="text-muted-foreground">
            {user.role === "patient" 
              ? "Encontre profissionais de saúde qualificados para suas necessidades"
              : "Gerencie seus atendimentos e conecte-se com pacientes"}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 hover:shadow-medium transition-all cursor-pointer">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Agendamentos</h3>
            <p className="text-sm text-muted-foreground">
              {user.role === "patient" 
                ? "Agende consultas domiciliares"
                : "Gerencie sua agenda"}
            </p>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-all cursor-pointer">
            <MessageSquare className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Mensagens</h3>
            <p className="text-sm text-muted-foreground">
              Chat seguro com {user.role === "patient" ? "profissionais" : "pacientes"}
            </p>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-all cursor-pointer">
            <User className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Perfil</h3>
            <p className="text-sm text-muted-foreground">
              Visualize e edite seu perfil
            </p>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-all cursor-pointer">
            <Settings className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Configurações</h3>
            <p className="text-sm text-muted-foreground">
              Ajuste suas preferências
            </p>
          </Card>
        </div>

        {/* Status Card */}
        <Card className="p-6 bg-gradient-hero text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Fase 1 Concluída! 🎉</h3>
              <p className="text-white/90">
                Sistema de autenticação e cadastro implementado. 
                Próximo passo: Fase 2 - Verificação de Identidade
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="h-10 w-10 text-white fill-white" />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;

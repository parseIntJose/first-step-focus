import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Heart, LogOut, User, Calendar, MessageSquare, Settings, TrendingUp, Bell, Activity } from "lucide-react";

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  const quickActions = [
    {
      icon: Calendar,
      title: "Agendamentos",
      description: user.role === "patient" ? "Agende consultas domiciliares" : "Gerencie sua agenda",
      color: "primary",
      badge: "3 novos"
    },
    {
      icon: MessageSquare,
      title: "Mensagens",
      description: `Chat seguro com ${user.role === "patient" ? "profissionais" : "pacientes"}`,
      color: "secondary",
      badge: "2 não lidas"
    },
    {
      icon: User,
      title: "Perfil",
      description: "Visualize e edite seu perfil",
      color: "primary"
    },
    {
      icon: Settings,
      title: "Configurações",
      description: "Ajuste suas preferências",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent-soft/20 to-background">
      {/* Header */}
      <header className="glass-effect border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl group">
            <div className="relative">
              <Heart className="h-7 w-7 text-primary fill-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 blur-lg bg-primary/30"></div>
            </div>
            <span className="gradient-text font-display text-2xl">
              HealthCare+
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative hover:bg-accent-soft">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>
            
            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm">
                <div className="font-medium">{user.fullName}</div>
                <div className="text-xs text-muted-foreground capitalize">{user.role}</div>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={logout}
              className="gap-2 hover:bg-accent-soft"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Sair</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-12 bg-gradient-primary rounded-full"></div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                Bem-vindo de volta, <span className="gradient-text">{user.fullName.split(' ')[0]}</span>!
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                {user.role === "patient" 
                  ? "Encontre profissionais de saúde qualificados para suas necessidades"
                  : "Gerencie seus atendimentos e conecte-se com pacientes"}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Atendimentos Hoje", value: "5", icon: Activity, trend: "+12%" },
            { label: "Taxa de Satisfação", value: "4.9", icon: TrendingUp, trend: "+0.3" },
            { label: "Horas Economizadas", value: "24h", icon: Calendar, trend: "+8h" }
          ].map((stat, index) => (
            <Card 
              key={index}
              className="p-6 border-2 border-transparent hover:border-primary/20 transition-all hover-lift bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-secondary">{stat.trend}</span>
              </div>
              <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">Ações Rápidas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index}
                className="p-6 cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all hover-lift group bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {action.badge && (
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-destructive text-white text-xs rounded-full font-medium">
                      {action.badge}
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft`}>
                    <action.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {action.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Status Card */}
        <Card className="relative overflow-hidden bg-gradient-hero text-white p-8 md:p-12 shadow-strong animate-fade-in-up">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white fill-white" />
                </div>
                <span className="font-semibold text-white/90">Fase 1</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-2">Sistema Completo! 🎉</h3>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                Autenticação e cadastro implementados com design moderno e profissional. 
                Pronto para a Fase 2: Verificação de Identidade.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-strong animate-float">
                <Heart className="h-12 w-12 text-white fill-white" />
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;

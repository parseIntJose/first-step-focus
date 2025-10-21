import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Shield, Clock, Users, CheckCircle2, ArrowRight, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent-soft/30 to-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft rounded-full border border-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Plataforma Verificada e Segura</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Conecte-se com
                <span className="block gradient-text mt-2">
                  profissionais de saúde
                </span>
                verificados
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Atendimento domiciliar seguro e profissional. Encontre o cuidado que você precisa, 
                quando e onde precisar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-primary shadow-medium hover:shadow-glow transition-all text-base px-8 py-6 group"
                  >
                    Começar agora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto border-2 hover:bg-accent-soft text-base px-8 py-6"
                  >
                    Já tenho conta
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-display font-bold gradient-text">100+</div>
                  <div className="text-sm text-muted-foreground">Profissionais</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold gradient-text">1000+</div>
                  <div className="text-sm text-muted-foreground">Atendimentos</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold gradient-text">4.9★</div>
                  <div className="text-sm text-muted-foreground">Avaliação</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Healthcare professionals" 
                  className="relative rounded-3xl shadow-strong w-full hover-lift border-4 border-white/50"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-strong animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">100% Verificado</div>
                      <div className="text-xs text-muted-foreground">Profissionais certificados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Por que escolher o <span className="gradient-text">HealthCare+</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Segurança, praticidade e qualidade no cuidado com sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Profissionais Verificados",
                description: "Todos os profissionais passam por rigoroso processo de verificação",
                color: "primary"
              },
              {
                icon: Clock,
                title: "Atendimento Rápido",
                description: "Encontre profissionais disponíveis próximos a você em minutos",
                color: "secondary"
              },
              {
                icon: Users,
                title: "Chat Seguro",
                description: "Comunicação protegida e confidencial com os profissionais",
                color: "primary"
              },
              {
                icon: CheckCircle2,
                title: "Pagamento Seguro",
                description: "Sistema de pagamento integrado e protegido",
                color: "secondary"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="p-8 border-2 border-transparent hover:border-primary/20 transition-all hover-lift group bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden bg-gradient-hero p-12 md:p-16 text-white shadow-strong animate-fade-in-up">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Pronto para começar sua jornada de saúde?
              </h2>
              <p className="text-xl mb-10 text-white/90 leading-relaxed">
                Junte-se a milhares de pessoas que já encontraram o cuidado que precisam
              </p>
              <Link to="/signup">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-strong hover:shadow-glow text-lg px-10 py-7 group"
                >
                  Criar minha conta
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="gradient-text font-display">HealthCare+</span>
            </div>
            <p className="text-muted-foreground text-center">&copy; 2024 HealthCare+. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Conecte-se com
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  profissionais de saúde
                </span>
                verificados
              </h1>
              <p className="text-lg text-muted-foreground">
                Atendimento domiciliar seguro e profissional. Encontre o cuidado que você precisa, 
                quando e onde precisar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-primary shadow-medium hover:shadow-strong transition-all"
                  >
                    Começar agora
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto"
                  >
                    Já tenho conta
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Healthcare professionals" 
                className="relative rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o HealthCare+?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Segurança, praticidade e qualidade no cuidado com sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-medium">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profissionais Verificados</h3>
              <p className="text-muted-foreground">
                Todos os profissionais passam por rigoroso processo de verificação
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-medium">
              <Clock className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-muted-foreground">
                Encontre profissionais disponíveis próximos a você em minutos
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-medium">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chat Seguro</h3>
              <p className="text-muted-foreground">
                Comunicação protegida e confidencial com os profissionais
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-primary/50 transition-all hover:shadow-medium">
              <CheckCircle2 className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pagamento Seguro</h3>
              <p className="text-muted-foreground">
                Sistema de pagamento integrado e protegido
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden bg-gradient-hero p-8 md:p-12 text-white">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para começar?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Junte-se a milhares de pessoas que já encontraram o cuidado que precisam
              </p>
              <Link to="/signup">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-strong"
                >
                  Criar minha conta
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 HealthCare+. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

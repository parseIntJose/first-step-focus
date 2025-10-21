import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import patientIcon from "@/assets/patient-icon.png";
import professionalIcon from "@/assets/professional-icon.png";

const ChooseProfile = () => {
  const [selected, setSelected] = useState<"patient" | "professional" | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selected) {
      navigate(`/signup/${selected}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Como você deseja usar o HealthCare+?
            </h1>
            <p className="text-lg text-muted-foreground">
              Escolha o perfil que melhor se adequa às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card 
              className={`p-8 cursor-pointer transition-all hover:shadow-medium ${
                selected === "patient" 
                  ? "border-2 border-primary shadow-medium" 
                  : "border-2 border-transparent"
              }`}
              onClick={() => setSelected("patient")}
            >
              <div className="text-center space-y-4">
                <img 
                  src={patientIcon} 
                  alt="Paciente" 
                  className="w-32 h-32 mx-auto"
                />
                <h3 className="text-2xl font-bold">Sou Paciente</h3>
                <p className="text-muted-foreground">
                  Procuro profissionais de saúde qualificados para atendimento domiciliar
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Encontre profissionais verificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Agende atendimentos domiciliares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Chat seguro com profissionais</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card 
              className={`p-8 cursor-pointer transition-all hover:shadow-medium ${
                selected === "professional" 
                  ? "border-2 border-secondary shadow-medium" 
                  : "border-2 border-transparent"
              }`}
              onClick={() => setSelected("professional")}
            >
              <div className="text-center space-y-4">
                <img 
                  src={professionalIcon} 
                  alt="Profissional" 
                  className="w-32 h-32 mx-auto"
                />
                <h3 className="text-2xl font-bold">Sou Profissional</h3>
                <p className="text-muted-foreground">
                  Ofereço serviços de saúde qualificados para pacientes
                </p>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Amplie sua base de pacientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Gerencie sua agenda facilmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Receba pagamentos com segurança</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              disabled={!selected}
              onClick={handleContinue}
              className="bg-gradient-primary shadow-medium hover:shadow-strong transition-all"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseProfile;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Heart className="h-6 w-6 text-primary fill-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            HealthCare+
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-primary shadow-soft hover:shadow-medium transition-all">
              Começar
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

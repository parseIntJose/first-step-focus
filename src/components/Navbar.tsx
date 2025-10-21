import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="relative">
            <Heart className="h-7 w-7 text-primary fill-primary transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 blur-lg bg-primary/30 animate-pulse-glow"></div>
          </div>
          <span className="gradient-text font-display text-2xl tracking-tight">
            HealthCare+
          </span>
        </Link>
        
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button variant="default" className="shadow-soft hover:shadow-medium">
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="hover:bg-accent-soft">
                  Entrar
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-primary shadow-medium hover:shadow-glow transition-all">
                  Começar Agora
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

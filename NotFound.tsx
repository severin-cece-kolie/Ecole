import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary/20">404</div>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">Page Non Trouvée</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="accent" className="gap-2">
              <Home className="h-4 w-4" />
              Retour à l'Accueil
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Page Précédente
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { 
  Award, 
  Shield, 
  TrendingUp, 
  Users, 
  BookOpen, 
  CheckCircle,
  CreditCard,
  IdCard,
  Lock
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const stats = [
    { label: "Élèves Inscrits", value: "850+", icon: Users },
    { label: "Taux Réussite BEPC", value: "95%", icon: Award },
    { label: "Taux Réussite BAC", value: "92%", icon: TrendingUp },
    { label: "Enseignants Qualifiés", value: "45+", icon: BookOpen },
  ];

  const features = [
    {
      icon: Shield,
      title: "Sécurité des Données",
      description: "Protection maximale des informations des élèves et parents avec chiffrement de bout en bout."
    },
    {
      icon: CreditCard,
      title: "Paiements Transparents",
      description: "Orange Money, MTN MoMo, virement bancaire. Reçus automatiques et historique complet."
    },
    {
      icon: IdCard,
      title: "Badges Numériques",
      description: "Génération automatique de badges avec QR code sécurisé pour chaque élève."
    },
    {
      icon: Lock,
      title: "Conformité RGPD",
      description: "Gestion responsable et conforme des données personnelles."
    }
  ];

  const programs = [
    { name: "Préscolaire", age: "3-5 ans", color: "bg-blue-500" },
    { name: "Primaire", age: "6-11 ans", color: "bg-green-500" },
    { name: "Collège", age: "12-15 ans", color: "bg-orange-500" },
    { name: "Lycée", age: "16-18 ans", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2ek0yNCA1MGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Année Scolaire 2026-2027
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bâtir l'Excellence,
                <span className="block text-accent">Former l'Avenir</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90">
                Une éducation de qualité supérieure, adaptée au système guinéen, avec digitalisation complète et transparence totale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/admissions">
                  <Button variant="accent" size="lg" className="w-full sm:w-auto">
                    Inscription 2026-2027
                  </Button>
                </Link>
                <Link to="/programmes">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Découvrir nos Programmes
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Reconnue par le Ministère</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Formation Certifiée</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-accent/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzIzNzc2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Élèves en classe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Taux de Réussite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos Filières
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la petite enfance au baccalauréat, un parcours d'excellence adapté à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${program.color} rounded-lg mb-4 flex items-center justify-center text-white font-bold`}>
                  {program.name[0]}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{program.name}</h3>
                <p className="text-muted-foreground">{program.age}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programmes">
              <Button variant="default" size="lg">
                Voir Tous les Programmes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Transparency Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Transparence & Sécurité
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une plateforme digitale moderne qui garantit la sécurité de vos données et la transparence totale des opérations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4 group-hover:bg-accent transition-colors">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Rejoindre l'Excellence ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Les inscriptions pour l'année scolaire 2026-2027 sont ouvertes. Rejoignez une école reconnue pour son excellence académique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                S'inscrire Maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

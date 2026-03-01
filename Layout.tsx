import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Programmes", href: "/programmes" },
    { name: "Admissions", href: "/admissions" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
  ];

  const dashboards = [
    { name: "Élève", href: "/dashboard/eleve" },
    { name: "Parent", href: "/dashboard/parent" },
    { name: "Enseignant", href: "/dashboard/enseignant" },
    { name: "Admin", href: "/dashboard/admin" },
  ];

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="bg-accent p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">École d'Excellence</div>
                <div className="text-xs text-primary-foreground/80">Guinée • 2026-2027</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors hover:text-accent ${
                    location.pathname === item.href ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="flex items-center gap-1 transition-colors hover:text-accent">
                  Espace Privé
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-card shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {dashboards.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-card-foreground hover:bg-accent/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-primary-foreground/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 px-2 transition-colors hover:text-accent ${
                    location.pathname === item.href ? "text-accent" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <div className="text-sm font-semibold mb-2 px-2">Espace Privé</div>
                {dashboards.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 px-4 text-sm transition-colors hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-accent" />
                <span className="font-bold">École d'Excellence</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Formation de qualité pour un avenir brillant. Reconnue par le Ministère de l'Éducation de Guinée.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/programmes" className="hover:text-accent transition-colors">Programmes</Link></li>
                <li><Link to="/admissions" className="hover:text-accent transition-colors">Admissions</Link></li>
                <li><Link to="/actualites" className="hover:text-accent transition-colors">Actualités</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Conakry, Guinée</li>
                <li>Tél: +224 XXX XXX XXX</li>
                <li>Email: contact@ecoleexcellence.gn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2026 École d'Excellence. Tous droits réservés. Année scolaire 2026-2027</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

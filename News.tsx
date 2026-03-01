import { Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Ouverture des Inscriptions 2026-2027",
      date: "15 Février 2026",
      category: "Inscriptions",
      image: "https://images.unsplash.com/photo-1649486116205-71c92cf5160f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2Nob29sJTIwY2hpbGRyZW4lMjB1bmlmb3Jtc3xlbnwxfHx8fDE3NzIzNzc2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Les inscriptions pour l'année scolaire 2026-2027 sont maintenant ouvertes. Processus 100% digitalisé avec génération automatique de badges."
    },
    {
      id: 2,
      title: "Résultats Exceptionnels au BEPC 2025",
      date: "10 Janvier 2026",
      category: "Résultats",
      image: "https://images.unsplash.com/photo-1645263012668-a6617115f9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzIzNzc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Notre école affiche un taux de réussite de 95% au BEPC 2025, confirmant son excellence académique."
    },
    {
      id: 3,
      title: "Nouvelle Plateforme de Paiement Mobile",
      date: "5 Janvier 2026",
      category: "Technologie",
      image: "https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzIzNzc2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Intégration complète d'Orange Money et MTN MoMo pour faciliter le paiement des mensualités avec transparence totale."
    },
    {
      id: 4,
      title: "Journée Portes Ouvertes - Mars 2026",
      date: "1 Mars 2026",
      category: "Événements",
      image: "https://images.unsplash.com/photo-1705660800046-2113f479369a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjByZWFkaW5nJTIwYm9va3N8ZW58MXx8fHwxNzcyMzc3NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Découvrez nos installations, rencontrez nos enseignants et assistez à des démonstrations pédagogiques."
    }
  ];

  const events = [
    { date: "15 Mars 2026", event: "Journée Portes Ouvertes" },
    { date: "1 Avril 2026", event: "Début du 3ème Trimestre" },
    { date: "15 Mai 2026", event: "Examens de Passage" },
    { date: "30 Juin 2026", event: "Fin de l'Année Scolaire" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités & Événements</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Restez informés des dernières nouvelles et événements de notre école.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12">Dernières Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Calendrier Scolaire</h2>
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-colors">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-center min-w-[120px]">
                    <div className="font-semibold">{event.date}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-card-foreground font-medium">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

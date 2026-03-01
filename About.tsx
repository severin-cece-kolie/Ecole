import { Award, Target, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence Académique",
      description: "Des programmes rigoureux conformes aux standards nationaux et internationaux."
    },
    {
      icon: Target,
      title: "Innovation Pédagogique",
      description: "Méthodes d'enseignement modernes adaptées aux besoins de chaque élève."
    },
    {
      icon: Users,
      title: "Équipe Qualifiée",
      description: "Enseignants diplômés et expérimentés, dévoués à la réussite de nos élèves."
    }
  ];

  const milestones = [
    { year: "2010", event: "Fondation de l'école" },
    { year: "2015", event: "Reconnaissance officielle par le Ministère" },
    { year: "2020", event: "Extension du campus et nouvelles infrastructures" },
    { year: "2025", event: "Digitalisation complète de la gestion scolaire" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Notre École</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Une institution d'excellence dédiée à la formation des leaders de demain, reconnue par le Ministère de l'Éducation de Guinée.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Offrir une éducation de qualité supérieure qui prépare chaque élève à exceller académiquement, 
                socialement et moralement. Nous nous engageons à fournir un environnement d'apprentissage sûr, 
                inclusif et stimulant.
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6 mt-8">Notre Vision</h2>
              <p className="text-lg text-muted-foreground">
                Être l'institution éducative de référence en Guinée, reconnue pour son excellence académique, 
                son innovation pédagogique et sa contribution au développement de citoyens responsables et compétents.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhY2hlciUyMHRlYWNoaW5nJTIwY2hpbGRyZW58ZW58MXx8fHwxNzcyMzc3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Enseignants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des principes fondamentaux qui guident notre approche éducative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Notre Historique</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plus de 15 ans d'excellence au service de l'éducation guinéenne.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="bg-accent text-accent-foreground w-20 h-20 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-accent/30 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-5">
                    <p className="text-lg text-card-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reconnaissance Officielle</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Notre établissement est pleinement reconnu et autorisé par le Ministère de l'Éducation Nationale 
              et de l'Alphabétisation de la République de Guinée.
            </p>
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Agrément Ministériel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Programmes Certifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Diplômes Reconnus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

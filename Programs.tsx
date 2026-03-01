import { BookOpen, Download } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Programs() {
  const programs = [
    {
      name: "Préscolaire",
      age: "3-5 ans",
      color: "bg-blue-500",
      description: "Éveil et développement des compétences fondamentales",
      subjects: [
        "Éveil mathématique",
        "Éveil linguistique (Français)",
        "Activités artistiques et manuelles",
        "Éducation physique et sportive",
        "Éveil scientifique",
        "Socialisation et autonomie"
      ]
    },
    {
      name: "Primaire",
      age: "6-11 ans (CP à CM2)",
      color: "bg-green-500",
      description: "Acquisition des savoirs fondamentaux",
      subjects: [
        "Français (Lecture, Écriture, Expression)",
        "Mathématiques",
        "Sciences d'Observation",
        "Histoire et Géographie",
        "Éducation Civique et Morale",
        "Éducation Physique et Sportive",
        "Anglais",
        "Arts plastiques"
      ]
    },
    {
      name: "Collège",
      age: "12-15 ans (7ème à 10ème)",
      color: "bg-orange-500",
      description: "Consolidation des acquis et préparation au BEPC",
      subjects: [
        "Français",
        "Mathématiques",
        "Sciences Physiques",
        "Sciences de la Vie et de la Terre",
        "Histoire-Géographie",
        "Anglais",
        "Éducation Civique",
        "Informatique",
        "Éducation Physique et Sportive",
        "Arts et Musique"
      ]
    },
    {
      name: "Lycée",
      age: "16-18 ans (11ème à 12ème)",
      color: "bg-purple-500",
      description: "Spécialisation et préparation au Baccalauréat",
      subjects: [
        "Tronc Commun : Français, Mathématiques, Anglais, Philosophie",
        "Sciences Expérimentales : Physique-Chimie, SVT",
        "Sciences Sociales : Histoire-Géographie, Économie",
        "Informatique et Technologies",
        "Éducation Physique et Sportive"
      ]
    }
  ];

  const successRates = [
    { exam: "BEPC", rate: "95%", year: "2025" },
    { exam: "Baccalauréat", rate: "92%", year: "2025" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Programmes</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Un parcours éducatif complet de la petite enfance au baccalauréat, conforme aux programmes officiels du Ministère de l'Éducation.
          </p>
        </div>
      </section>

      {/* Success Rates */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <h3 className="text-lg text-muted-foreground mb-2">Taux de Réussite aux Examens Nationaux</h3>
            </div>
            {successRates.map((rate, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-accent-foreground px-8 py-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">{rate.rate}</div>
                  <div className="text-sm">{rate.exam} {rate.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'bg-secondary' : ''} rounded-2xl p-8 md:p-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <div className={`w-16 h-16 ${program.color} rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {program.name[0]}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-2">{program.name}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{program.age}</p>
                  <p className="text-card-foreground">{program.description}</p>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Matières Enseignées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span className="text-card-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Regulations */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Règlement Intérieur</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Téléchargez notre règlement intérieur pour connaître les règles et le fonctionnement de l'établissement.
          </p>
          <Button variant="accent" size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            Télécharger le Règlement (PDF)
          </Button>
        </div>
      </section>
    </div>
  );
}

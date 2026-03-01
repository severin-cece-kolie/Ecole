import { useState } from "react";
import { Button } from "../components/ui/button";
import { 
  CheckCircle, 
  Upload, 
  FileText, 
  User, 
  Calendar,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    level: "",
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inscription soumise avec succès ! Vous recevrez une confirmation par email.");
  };

  const steps = [
    {
      number: 1,
      title: "Remplir le formulaire",
      description: "Complétez le formulaire d'inscription en ligne avec les informations de l'élève."
    },
    {
      number: 2,
      title: "Soumettre les documents",
      description: "Téléchargez les documents requis (extrait de naissance, certificat de scolarité, relevé de notes)."
    },
    {
      number: 3,
      title: "Validation et paiement",
      description: "Après validation du dossier, effectuez le paiement des frais d'inscription."
    },
    {
      number: 4,
      title: "Badge élève",
      description: "Recevez automatiquement le badge numérique de l'élève avec QR code sécurisé."
    }
  ];

  const requiredDocuments = [
    "Extrait de naissance de l'élève",
    "Certificat de scolarité (pour les transferts)",
    "Relevé de notes de l'année précédente",
    "2 photos d'identité récentes",
    "Photocopie de la carte d'identité du parent/tuteur"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions 2026-2027</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Rejoignez notre école d'excellence. Les inscriptions sont ouvertes pour l'année scolaire 2026-2027.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Processus d'Inscription</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Documents Requis</h2>
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <ul className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Formulaire d'Inscription</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Student Information */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Informations de l'Élève
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Prénom *</label>
                    <input
                      type="text"
                      name="studentFirstName"
                      value={formData.studentFirstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Nom *</label>
                    <input
                      type="text"
                      name="studentLastName"
                      value={formData.studentLastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Date de Naissance *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Lieu de Naissance *</label>
                    <input
                      type="text"
                      name="placeOfBirth"
                      value={formData.placeOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Genre *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionner</option>
                      <option value="male">Masculin</option>
                      <option value="female">Féminin</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Niveau Souhaité *</label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionner</option>
                      <option value="prescolaire">Préscolaire</option>
                      <option value="cp">CP</option>
                      <option value="ce1">CE1</option>
                      <option value="ce2">CE2</option>
                      <option value="cm1">CM1</option>
                      <option value="cm2">CM2</option>
                      <option value="7eme">7ème</option>
                      <option value="8eme">8ème</option>
                      <option value="9eme">9ème</option>
                      <option value="10eme">10ème</option>
                      <option value="11eme">11ème</option>
                      <option value="12eme">12ème</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Informations du Parent/Tuteur
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Prénom *</label>
                    <input
                      type="text"
                      name="parentFirstName"
                      value={formData.parentFirstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Nom *</label>
                    <input
                      type="text"
                      name="parentLastName"
                      value={formData.parentLastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-card-foreground">Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+224 XXX XXX XXX"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2 text-card-foreground">Adresse *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Téléchargement des Documents
                </h3>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-card-foreground mb-2">Cliquez pour télécharger ou glissez-déposez</p>
                    <p className="text-sm text-muted-foreground">PDF, JPG, PNG (Max. 10MB par fichier)</p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <Button type="submit" variant="accent" size="lg" className="min-w-[200px]">
                  Soumettre l'Inscription
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

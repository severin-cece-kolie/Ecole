import { useState } from "react";
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  IdCard, 
  Download,
  CheckCircle,
  Clock,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { StudentBadge } from "../../components/StudentBadge";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Élèves Inscrits", value: "850", icon: GraduationCap, color: "text-blue-600" },
    { label: "Enseignants", value: "45", icon: Users, color: "text-green-600" },
    { label: "Paiements en Attente", value: "127", icon: Clock, color: "text-orange-600" },
    { label: "Revenus du Mois", value: "245M GNF", icon: TrendingUp, color: "text-purple-600" },
  ];

  const recentPayments = [
    {
      id: 1,
      student: "Amadou Diallo",
      class: "10ème A",
      amount: "800,000 GNF",
      method: "Orange Money",
      status: "En Attente",
      date: "01/03/2026"
    },
    {
      id: 2,
      student: "Mariama Camara",
      class: "7ème B",
      amount: "800,000 GNF",
      method: "MTN MoMo",
      status: "Validé",
      date: "28/02/2026"
    },
    {
      id: 3,
      student: "Ibrahima Bah",
      class: "10ème A",
      amount: "800,000 GNF",
      method: "Virement Bancaire",
      status: "En Attente",
      date: "27/02/2026"
    },
  ];

  const recentStudents = [
    {
      id: 1,
      name: "Fatoumata Sow",
      class: "CP",
      matricule: "2026-STU-001240",
      status: "Badge Généré",
      registrationDate: "01/03/2026"
    },
    {
      id: 2,
      name: "Mohamed Conte",
      class: "9ème A",
      matricule: "2026-STU-001241",
      status: "En Attente",
      registrationDate: "28/02/2026"
    },
  ];

  const sampleStudent = {
    firstName: "Amadou",
    lastName: "Diallo",
    matricule: "2026-STU-001234",
    class: "10ème A",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    year: "2026-2027"
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Tableau de Bord Administrateur</h1>
          <p className="text-muted-foreground">Gestion complète de l'établissement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-card-foreground">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-card rounded-xl shadow-lg mb-8">
          <div className="border-b border-border">
            <div className="flex overflow-x-auto">
              {[
                { id: "overview", label: "Vue d'Ensemble", icon: TrendingUp },
                { id: "payments", label: "Gestion Paiements", icon: CreditCard },
                { id: "students", label: "Gestion Élèves", icon: Users },
                { id: "badges", label: "Gestion Badges", icon: IdCard },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted-foreground hover:text-card-foreground'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Activité Récente</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                        <UserPlus className="h-5 w-5 text-green-600" />
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">Nouvelle inscription: Fatoumata Sow</p>
                          <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">Paiement validé: Mariama Camara</p>
                          <p className="text-xs text-muted-foreground">Il y a 5 heures</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                        <IdCard className="h-5 w-5 text-purple-600" />
                        <div className="flex-1">
                          <p className="text-sm text-card-foreground">Badge généré: Mohamed Conte</p>
                          <p className="text-xs text-muted-foreground">Hier</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4">Statistiques du Jour</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-muted-foreground">Nouvelles Inscriptions</span>
                        <span className="font-bold text-card-foreground">12</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-muted-foreground">Paiements Reçus</span>
                        <span className="font-bold text-green-600">8.5M GNF</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-muted-foreground">Badges Générés</span>
                        <span className="font-bold text-card-foreground">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === "payments" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Paiements Récents</h3>
                  <Button variant="accent" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter Comptabilité
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Élève</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Classe</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Montant</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Méthode</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Statut</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPayments.map((payment) => (
                        <tr key={payment.id} className="border-b border-border">
                          <td className="px-4 py-4 text-sm">{payment.student}</td>
                          <td className="px-4 py-4 text-sm">{payment.class}</td>
                          <td className="px-4 py-4 text-sm font-semibold">{payment.amount}</td>
                          <td className="px-4 py-4 text-sm">{payment.method}</td>
                          <td className="px-4 py-4 text-sm">{payment.date}</td>
                          <td className="px-4 py-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              payment.status === 'Validé' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            {payment.status === 'En Attente' ? (
                              <Button variant="accent" size="sm">
                                Valider
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Students Tab */}
            {activeTab === "students" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Inscriptions Récentes</h3>
                  <Button variant="accent" size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Nouvelle Inscription
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Nom</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Classe</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Matricule</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Date d'Inscription</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Statut Badge</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentStudents.map((student) => (
                        <tr key={student.id} className="border-b border-border">
                          <td className="px-4 py-4 text-sm">{student.name}</td>
                          <td className="px-4 py-4 text-sm">{student.class}</td>
                          <td className="px-4 py-4 text-sm font-mono">{student.matricule}</td>
                          <td className="px-4 py-4 text-sm">{student.registrationDate}</td>
                          <td className="px-4 py-4 text-center">
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              student.status === 'Badge Généré' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <Button variant="outline" size="sm">
                              Voir Détails
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Badges Tab */}
            {activeTab === "badges" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Gestion des Badges Élèves</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Exporter Tous
                    </Button>
                    <Button variant="accent" size="sm">
                      <IdCard className="h-4 w-4 mr-2" />
                      Générer Badge
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-4">Aperçu du Badge</h4>
                    <StudentBadge student={sampleStudent} />
                    <div className="mt-4 space-y-2">
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger PDF
                      </Button>
                      <Button variant="outline" className="w-full">
                        Envoyer par Email
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-4">Statistiques Badges</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-secondary rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Badges Générés (Total)</span>
                          <span className="text-2xl font-bold text-primary">850</span>
                        </div>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Badges Ce Mois</span>
                          <span className="text-2xl font-bold text-green-600">45</span>
                        </div>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Badges Désactivés</span>
                          <span className="text-2xl font-bold text-red-600">12</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <h5 className="font-semibold text-card-foreground mb-2">Fonctionnalités</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Génération automatique avec QR code</li>
                        <li>✓ Téléchargement PDF format carte</li>
                        <li>✓ Envoi automatique par email</li>
                        <li>✓ Régénération en cas de perte</li>
                        <li>✓ Désactivation sécurisée</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

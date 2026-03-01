import { Calendar, FileText, CreditCard, Bell, Download, IdCard } from "lucide-react";
import { Button } from "../../components/ui/button";
import { StudentBadge } from "../../components/StudentBadge";

export default function StudentDashboard() {
  const student = {
    firstName: "Amadou",
    lastName: "Diallo",
    matricule: "2026-STU-001234",
    class: "10ème A",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    year: "2026-2027"
  };

  const schedule = [
    { day: "Lundi", subjects: ["Mathématiques", "Français", "Anglais", "SVT"] },
    { day: "Mardi", subjects: ["Physique-Chimie", "Histoire-Géo", "Français", "EPS"] },
    { day: "Mercredi", subjects: ["Mathématiques", "Anglais", "Informatique", "Arts"] },
    { day: "Jeudi", subjects: ["Français", "SVT", "Histoire-Géo", "Mathématiques"] },
    { day: "Vendredi", subjects: ["Physique-Chimie", "Anglais", "Éducation Civique", "EPS"] },
  ];

  const grades = [
    { subject: "Mathématiques", note: 15.5, max: 20, coef: 4 },
    { subject: "Français", note: 14, max: 20, coef: 3 },
    { subject: "Anglais", note: 16, max: 20, coef: 2 },
    { subject: "Physique-Chimie", note: 13.5, max: 20, coef: 3 },
    { subject: "SVT", note: 15, max: 20, coef: 2 },
    { subject: "Histoire-Géographie", note: 14.5, max: 20, coef: 2 },
  ];

  const payments = [
    { month: "Février 2026", amount: "800,000 GNF", status: "Payé", date: "05/02/2026" },
    { month: "Janvier 2026", amount: "800,000 GNF", status: "Payé", date: "08/01/2026" },
    { month: "Décembre 2025", amount: "800,000 GNF", status: "Payé", date: "03/12/2025" },
  ];

  const notifications = [
    { id: 1, message: "Nouveau bulletin disponible", date: "28/02/2026", type: "info" },
    { id: 2, message: "Paiement de Mars confirmé", date: "05/03/2026", type: "success" },
    { id: 3, message: "Réunion parents-professeurs le 15/03", date: "01/03/2026", type: "warning" },
  ];

  const average = (grades.reduce((sum, g) => sum + (g.note * g.coef), 0) / grades.reduce((sum, g) => sum + g.coef, 0)).toFixed(2);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Tableau de Bord Élève</h1>
          <p className="text-muted-foreground">Bienvenue, {student.firstName} {student.lastName}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Moyenne Générale</span>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{average}/20</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Classe</span>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-card-foreground">{student.class}</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Matricule</span>
                  <IdCard className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm font-bold text-card-foreground">{student.matricule}</div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Emploi du Temps
              </h2>
              <div className="space-y-3">
                {schedule.map((day, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4 py-2">
                    <div className="font-semibold text-card-foreground mb-1">{day.day}</div>
                    <div className="flex flex-wrap gap-2">
                      {day.subjects.map((subject, subIndex) => (
                        <span key={subIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grades */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Notes & Bulletins
                </h2>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger Bulletin
                </Button>
              </div>
              <div className="space-y-3">
                {grades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div className="flex-1">
                      <div className="font-semibold text-card-foreground">{grade.subject}</div>
                      <div className="text-xs text-muted-foreground">Coefficient: {grade.coef}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{grade.note}/{grade.max}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Historique des Paiements
              </h2>
              <div className="space-y-3">
                {payments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <div>
                      <div className="font-semibold text-card-foreground">{payment.month}</div>
                      <div className="text-xs text-muted-foreground">{payment.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-card-foreground">{payment.amount}</div>
                      <div className="text-xs text-green-600">{payment.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Student Badge */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <IdCard className="h-5 w-5" />
                Badge Élève
              </h2>
              <StudentBadge student={student} />
              <Button variant="outline" className="w-full mt-4" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Télécharger Badge
              </Button>
            </div>

            {/* Notifications */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </h2>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`p-3 rounded-lg ${
                    notif.type === 'success' ? 'bg-green-50 border-l-4 border-green-500' :
                    notif.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500' :
                    'bg-blue-50 border-l-4 border-blue-500'
                  }`}>
                    <div className="text-sm text-card-foreground">{notif.message}</div>
                    <div className="text-xs text-muted-foreground mt-1">{notif.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

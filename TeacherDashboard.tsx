import { useState } from "react";
import { Users, BookOpen, Edit, MessageSquare, Calendar } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState("10ème A");

  const classes = [
    { name: "10ème A", students: 32, subject: "Mathématiques" },
    { name: "10ème B", students: 28, subject: "Mathématiques" },
    { name: "9ème A", students: 30, subject: "Mathématiques" },
  ];

  const students = [
    { 
      id: 1, 
      name: "Amadou Diallo", 
      matricule: "2026-STU-001234",
      grades: [15.5, 14, 16, 15],
      average: 15.1,
      attendance: 95,
      behavior: "Excellent"
    },
    { 
      id: 2, 
      name: "Mariama Camara", 
      matricule: "2026-STU-001235",
      grades: [17, 16.5, 18, 17],
      average: 17.1,
      attendance: 98,
      behavior: "Excellent"
    },
    { 
      id: 3, 
      name: "Ibrahima Bah", 
      matricule: "2026-STU-001236",
      grades: [12, 13.5, 14, 13],
      average: 13.1,
      attendance: 88,
      behavior: "Bon"
    },
    { 
      id: 4, 
      name: "Aissatou Sow", 
      matricule: "2026-STU-001237",
      grades: [16, 15.5, 17, 16.5],
      average: 16.3,
      attendance: 96,
      behavior: "Excellent"
    },
  ];

  const schedule = [
    { day: "Lundi", time: "8h-10h", class: "10ème A" },
    { day: "Lundi", time: "10h-12h", class: "10ème B" },
    { day: "Mardi", time: "8h-10h", class: "9ème A" },
    { day: "Mercredi", time: "14h-16h", class: "10ème A" },
    { day: "Jeudi", time: "10h-12h", class: "10ème B" },
    { day: "Vendredi", time: "8h-10h", class: "9ème A" },
  ];

  const [editingStudent, setEditingStudent] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Tableau de Bord Enseignant</h1>
          <p className="text-muted-foreground">Gestion des classes et suivi des élèves</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Classes Overview */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-primary mb-4">Mes Classes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {classes.map((cls) => (
                  <button
                    key={cls.name}
                    onClick={() => setSelectedClass(cls.name)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedClass === cls.name
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="text-lg font-bold text-card-foreground mb-1">{cls.name}</div>
                    <div className="text-sm text-muted-foreground mb-2">{cls.subject}</div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <Users className="h-4 w-4" />
                      {cls.students} élèves
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Students List */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Liste des Élèves - {selectedClass}
                </h2>
                <Button variant="accent" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Publier les Notes
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-card-foreground">Nom</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-card-foreground">Matricule</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-card-foreground">Moyenne</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-card-foreground">Présence</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-card-foreground">Comportement</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-card-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b border-border hover:bg-secondary/50">
                        <td className="px-4 py-4 text-sm text-card-foreground">{student.name}</td>
                        <td className="px-4 py-4 text-sm text-muted-foreground font-mono">{student.matricule}</td>
                        <td className="px-4 py-4 text-center">
                          <span className="font-semibold text-primary">{student.average}/20</span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs ${
                            student.attendance >= 95 ? 'bg-green-100 text-green-700' :
                            student.attendance >= 85 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {student.attendance}%
                          </span>
                        </td>
                        <td className="px-4 py-4 text-center text-sm">{student.behavior}</td>
                        <td className="px-4 py-4 text-center">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setEditingStudent(student.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Notes en Attente</h3>
                    <p className="text-sm text-muted-foreground">3 devoirs à corriger</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Voir les Devoirs
                </Button>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Commentaires</h3>
                    <p className="text-sm text-muted-foreground">5 rapports à rédiger</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Rédiger Commentaires
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-primary mb-4">Statistiques</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Classes Actives</span>
                    <span className="font-semibold text-card-foreground">3</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Total Élèves</span>
                    <span className="font-semibold text-card-foreground">90</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Moyenne Générale</span>
                    <span className="font-semibold text-primary">15.2/20</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Emploi du Temps
              </h2>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="p-3 bg-secondary rounded-lg">
                    <div className="font-semibold text-sm text-card-foreground">{item.day}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.time}</div>
                    <div className="text-xs text-primary mt-1">{item.class}</div>
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

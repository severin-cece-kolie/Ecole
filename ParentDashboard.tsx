import { useState } from "react";
import { User, FileText, CreditCard, Download, Bell, DollarSign } from "lucide-react";
import { Button } from "../../components/ui/button";
import { PaymentModal } from "../../components/PaymentModal";

export default function ParentDashboard() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const children = [
    {
      id: 1,
      name: "Amadou Diallo",
      class: "10ème A",
      matricule: "2026-STU-001234",
      average: "14.8/20"
    },
    {
      id: 2,
      name: "Fatoumata Diallo",
      class: "7ème B",
      matricule: "2026-STU-001235",
      average: "15.2/20"
    }
  ];

  const [selectedChild, setSelectedChild] = useState(children[0]);

  const payments = [
    { 
      id: 1,
      month: "Mars 2026", 
      amount: "800,000 GNF", 
      status: "En Attente",
      dueDate: "05/03/2026",
      type: "pending"
    },
    { 
      id: 2,
      month: "Février 2026", 
      amount: "800,000 GNF", 
      status: "Payé", 
      date: "05/02/2026",
      receipt: "REC-2026-02-001234",
      method: "Orange Money",
      type: "paid"
    },
    { 
      id: 3,
      month: "Janvier 2026", 
      amount: "800,000 GNF", 
      status: "Payé", 
      date: "08/01/2026",
      receipt: "REC-2026-01-001234",
      method: "MTN MoMo",
      type: "paid"
    },
  ];

  const balance = {
    total: 7200000,
    paid: 1600000,
    remaining: 5600000
  };

  const notifications = [
    { 
      id: 1, 
      message: "Paiement de Février confirmé pour Amadou", 
      date: "05/02/2026", 
      type: "success" 
    },
    { 
      id: 2, 
      message: "Paiement de Mars dû le 05/03/2026", 
      date: "01/03/2026", 
      type: "warning" 
    },
    { 
      id: 3, 
      message: "Nouveau bulletin disponible pour Fatoumata", 
      date: "28/02/2026", 
      type: "info" 
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Tableau de Bord Parent</h1>
          <p className="text-muted-foreground">Suivi académique et financier de vos enfants</p>
        </div>

        {/* Child Selector */}
        <div className="bg-card rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-lg font-semibold text-primary mb-4">Sélectionner un Enfant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => setSelectedChild(child)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedChild.id === child.id
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {child.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{child.name}</div>
                    <div className="text-sm text-muted-foreground">{child.class} • {child.average}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Annuel</span>
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">
                  {balance.total.toLocaleString()} GNF
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Payé</span>
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {balance.paid.toLocaleString()} GNF
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Solde Restant</span>
                  <CreditCard className="h-5 w-5 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  {balance.remaining.toLocaleString()} GNF
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Historique des Paiements
                </h2>
                <Button 
                  variant="accent" 
                  size="sm"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Effectuer un Paiement
                </Button>
              </div>
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div 
                    key={payment.id} 
                    className={`p-4 rounded-lg border-l-4 ${
                      payment.type === 'pending' 
                        ? 'bg-orange-50 border-orange-500' 
                        : 'bg-green-50 border-green-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-semibold text-card-foreground">{payment.month}</div>
                        <div className="text-sm text-muted-foreground">
                          {payment.type === 'pending' 
                            ? `Échéance: ${payment.dueDate}` 
                            : `Payé le ${payment.date}`}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-card-foreground">{payment.amount}</div>
                        <div className={`text-sm ${
                          payment.type === 'pending' ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {payment.status}
                        </div>
                      </div>
                    </div>
                    {payment.type === 'paid' && (
                      <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          {payment.method} • Reçu: {payment.receipt}
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Télécharger
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Progress */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Suivi Académique - {selectedChild.name}
                </h2>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger Bulletin
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{selectedChild.average}</div>
                  <div className="text-sm text-muted-foreground">Moyenne</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Présence</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Matières</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-green-600">Bon</div>
                  <div className="text-sm text-muted-foreground">Comportement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-primary mb-4">Actions Rapides</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Télécharger Bulletins
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Exporter Paiements
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Contacter l'École
                </Button>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </h2>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div 
                    key={notif.id} 
                    className={`p-3 rounded-lg ${
                      notif.type === 'success' ? 'bg-green-50 border-l-4 border-green-500' :
                      notif.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500' :
                      'bg-blue-50 border-l-4 border-blue-500'
                    }`}
                  >
                    <div className="text-sm text-card-foreground">{notif.message}</div>
                    <div className="text-xs text-muted-foreground mt-1">{notif.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal 
          onClose={() => setShowPaymentModal(false)}
          studentName={selectedChild.name}
        />
      )}
    </div>
  );
}

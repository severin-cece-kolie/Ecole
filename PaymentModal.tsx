import { useState } from "react";
import { X, CreditCard, Building, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

interface PaymentModalProps {
  onClose: () => void;
  studentName: string;
}

export function PaymentModal({ onClose, studentName }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("800000");
  const [month, setMonth] = useState("Mars 2026");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Paiement initié avec succès!\n\nMéthode: ${paymentMethod}\nMontant: ${amount} GNF\nMois: ${month}\n\nVous recevrez une confirmation par email et SMS.`);
    onClose();
  };

  const paymentMethods = [
    { 
      id: "orange", 
      name: "Orange Money", 
      icon: Smartphone,
      color: "bg-orange-500",
      description: "Paiement mobile instantané"
    },
    { 
      id: "mtn", 
      name: "MTN MoMo", 
      icon: Smartphone,
      color: "bg-yellow-500",
      description: "Paiement mobile instantané"
    },
    { 
      id: "bank", 
      name: "Virement Bancaire", 
      icon: Building,
      color: "bg-blue-500",
      description: "Transfert bancaire sécurisé"
    },
    { 
      id: "cash", 
      name: "Paiement à l'École", 
      icon: CreditCard,
      color: "bg-green-500",
      description: "Paiement en espèces au secrétariat"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Effectuer un Paiement</h2>
            <p className="text-sm text-primary-foreground/80">Pour: {studentName}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Amount and Month */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-card-foreground">Mois de Paiement *</label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Mars 2026">Mars 2026</option>
                <option value="Avril 2026">Avril 2026</option>
                <option value="Mai 2026">Mai 2026</option>
                <option value="Juin 2026">Juin 2026</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-card-foreground">Montant (GNF) *</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <label className="block text-sm mb-4 text-card-foreground font-semibold">
              Mode de Paiement *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    paymentMethod === method.id
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${method.color} p-2 rounded-lg`}>
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-card-foreground">{method.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{method.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details based on method */}
          {(paymentMethod === "orange" || paymentMethod === "mtn") && (
            <div className="bg-secondary p-4 rounded-lg">
              <label className="block text-sm mb-2 text-card-foreground">
                Numéro de Téléphone *
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+224 XXX XXX XXX"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Vous recevrez une notification sur votre téléphone pour confirmer le paiement.
              </p>
            </div>
          )}

          {paymentMethod === "bank" && (
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <h4 className="font-semibold text-card-foreground">Coordonnées Bancaires</h4>
              <div className="text-sm space-y-1">
                <p><strong>Banque:</strong> Société Générale Guinée</p>
                <p><strong>IBAN:</strong> GN00 0000 0000 0000 0000 0000</p>
                <p><strong>Code SWIFT:</strong> SOGEXXXX</p>
                <p><strong>Référence:</strong> {studentName} - {month}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Veuillez inclure le nom de l'élève et le mois dans la référence du virement.
              </p>
            </div>
          )}

          {paymentMethod === "cash" && (
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-card-foreground mb-2">Instructions</h4>
              <p className="text-sm text-muted-foreground">
                Présentez-vous au secrétariat de l'école pendant les heures d'ouverture (Lun-Ven: 8h-17h, Sam: 9h-13h). 
                Un reçu vous sera délivré immédiatement après le paiement.
              </p>
            </div>
          )}

          {/* Confirmation Message */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold text-card-foreground mb-2">Après Validation</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Confirmation par Email</li>
              <li>✓ Confirmation par SMS</li>
              <li>✓ Notification dans votre tableau de bord</li>
              <li>✓ Reçu PDF téléchargeable</li>
            </ul>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="accent"
              disabled={!paymentMethod}
              className="flex-1"
            >
              Confirmer le Paiement
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

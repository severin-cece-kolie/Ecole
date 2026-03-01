import { QRCodeSVG } from "qrcode.react";
import { GraduationCap } from "lucide-react";

interface StudentBadgeProps {
  student: {
    firstName: string;
    lastName: string;
    matricule: string;
    class: string;
    photo: string;
    year: string;
  };
}

export function StudentBadge({ student }: StudentBadgeProps) {
  const qrData = JSON.stringify({
    matricule: student.matricule,
    name: `${student.firstName} ${student.lastName}`,
    class: student.class,
    year: student.year,
    issued: new Date().toISOString()
  });

  return (
    <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-xl p-6 shadow-2xl max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-4 pb-4 border-b border-primary-foreground/20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <GraduationCap className="h-6 w-6 text-accent" />
          <span className="font-bold text-lg">École d'Excellence</span>
        </div>
        <div className="text-xs text-primary-foreground/80">Guinée • {student.year}</div>
      </div>

      {/* Photo */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <img 
            src={student.photo} 
            alt={`${student.firstName} ${student.lastName}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Student Info */}
      <div className="text-center mb-4">
        <div className="text-xl font-bold mb-1">
          {student.firstName} {student.lastName}
        </div>
        <div className="text-sm text-primary-foreground/90 mb-1">
          Classe: {student.class}
        </div>
        <div className="text-xs font-mono bg-accent/20 inline-block px-3 py-1 rounded">
          {student.matricule}
        </div>
      </div>

      {/* QR Code */}
      <div className="flex justify-center mb-3">
        <div className="bg-white p-3 rounded-lg">
          <QRCodeSVG 
            value={qrData}
            size={120}
            level="H"
            includeMargin={false}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-primary-foreground/70 border-t border-primary-foreground/20 pt-3">
        <div className="mb-1">Badge Officiel • Année Scolaire {student.year}</div>
        <div className="font-mono">Signature Numérique Vérifiée ✓</div>
      </div>
    </div>
  );
}

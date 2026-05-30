import { ShieldCheck, Star, Award, Users } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Dermatologist Reviewed",
    subtitle: "All picks vetted by licensed dermatologists",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Star,
    title: "Amazon Verified",
    subtitle: "Real ratings from 100,000+ shoppers",
    color: "text-gold-500",
    bg: "bg-gold-50",
  },
  {
    icon: Award,
    title: "Science-Backed",
    subtitle: "Only evidence-based formulas make the cut",
    color: "text-blush-500",
    bg: "bg-blush-50",
  },
  {
    icon: Users,
    title: "Community Trusted",
    subtitle: "12,000+ subscribers trust our reviews",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className={`${badge.bg} rounded-2xl p-4 flex flex-col items-center text-center gap-2`}
        >
          <badge.icon className={`h-7 w-7 ${badge.color}`} />
          <div>
            <p className="font-semibold text-neutral-900 text-sm leading-tight">{badge.title}</p>
            <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{badge.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

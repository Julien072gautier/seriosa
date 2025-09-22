import React from 'react';
import { 
  MessageSquare, 
  Users, 
  Brain, 
  Globe, 
  Target, 
  Star, 
  UserCheck, 
  Monitor, 
  Zap, 
  BookOpen, 
  Award,
  Hand,
  Laptop,
  Activity,
  MessageCircle,
  Eye,
  CalendarCheck,
  FolderCog,
  Clock,
  ClipboardCheck,
  GraduationCap,
  ClipboardList,
  BarChart,
  Wrench,
  Shield,
  FileCheck
} from 'lucide-react';

interface FormationIconProps {
  icon: string;
  size?: number;
  className?: string;
}

const FormationIcon: React.FC<FormationIconProps> = ({ icon, size = 20, className = "" }) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    MessageSquare,
    Users,
    Brain,
    Globe,
    Target,
    Star,
    UserCheck,
    Monitor,
    Zap,
    BookOpen,
    Award,
    Hand,
    Laptop,
    Activity,
    MessageCircle,
    Eye,
    CalendarCheck,
    FolderCog,
    Clock,
    ClipboardCheck,
    GraduationCap,
    ClipboardList,
    BarChart,
    Wrench,
    Shield,
    FileCheck
  };

  // Si c'est un emoji (détection simple par caractères spéciaux)
  if (icon.length === 1 && (icon.charCodeAt(0) > 127 || icon.includes('🇫') || icon.includes('🇩') || icon.includes('🇪') || icon.includes('🇮') || icon.includes('🇵') || icon.includes('🇷') || icon.includes('🇨') || icon.includes('🇯') || icon.includes('🇦'))) {
    return <span className={`text-2xl ${className}`}>{icon}</span>;
  }

  // Si c'est une icône Lucide
  const IconComponent = iconMap[icon];
  if (IconComponent) {
    return <IconComponent size={size} className={className} />;
  }

  // Icône par défaut
  return <Star size={size} className={className} />;
};

export default FormationIcon;

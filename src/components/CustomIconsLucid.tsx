import * as Lucide from 'lucide-react';

interface DynamicIconProps {
  iconName: string;
  color?: string;
  size?: number;
  isHover?: string;
  isActive?: boolean;
  isLogout?: boolean;
}

export default function ({ iconName, size, color }: DynamicIconProps) {
  //@ts-ignore
  const DynamicIcon = Lucide[iconName];

  if (!DynamicIcon) {
    throw new Error(`Icon '${iconName}' not found`);
  }

  return <DynamicIcon size={size ?? 24} color={color} />;
}

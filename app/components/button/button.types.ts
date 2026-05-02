export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  sizes?: "sm" | "md" | "lg";
}

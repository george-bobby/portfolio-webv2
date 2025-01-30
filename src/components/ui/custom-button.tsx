import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { cn } from "@/utils/utils";
import type { LucideIcon } from "lucide-react";

interface CustomButtonProps extends ButtonProps {
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  isExternal?: boolean;
}

const CustomButton = ({
  children,
  icon: Icon,
  iconPosition = "right",
  className,
  variant = "default",
  isExternal,
  ...props
}: CustomButtonProps) => {
  const content = (
    <>
      {iconPosition === "left" && Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {iconPosition === "right" && Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const buttonClasses = cn(
    "group relative overflow-hidden hover:scale-105 transition-all duration-300",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
        variant === "outline",
      "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80":
        variant === "secondary",
    },
    className
  );

  if (isExternal) {
    return (
      <a
        href={props.onClick?.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <Button className={buttonClasses} variant={variant} {...props}>
      {content}
    </Button>
  );
};

export { CustomButton };
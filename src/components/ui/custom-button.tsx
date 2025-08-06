import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'google';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon: Icon, children, ...props }, ref) => {
    const baseStyles = "w-full rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2";
    
    const variants = {
      primary: "bg-gradient-orange text-todo-dark hover:opacity-90 shadow-button",
      secondary: "bg-todo-card text-todo-text border border-todo-border hover:bg-todo-border",
      outline: "bg-transparent text-todo-orange border-2 border-todo-orange hover:bg-todo-orange hover:text-todo-dark",
      google: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 shadow-sm"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };
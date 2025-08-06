import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, icon: Icon, label, type = 'text', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm text-todo-text-muted font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-todo-text-muted" />
          )}
          <input
            type={type}
            className={cn(
              "w-full px-4 py-3 bg-todo-card border border-todo-border rounded-xl",
              "text-todo-text placeholder:text-todo-text-muted",
              "focus:outline-none focus:ring-2 focus:ring-todo-orange focus:border-transparent",
              "transition-all duration-200",
              Icon && "pl-11",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
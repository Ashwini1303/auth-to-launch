import React from 'react';
import { Crown } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  showLogo?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, showLogo = true }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showLogo && (
        <div className="flex items-center justify-center pt-8 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-todo-dark" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-todo-text">MY TODO</h1>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-todo-text mb-8 text-center">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
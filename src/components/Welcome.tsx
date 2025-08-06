import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { CustomButton } from './ui/custom-button';
import welcomeImage from '@/assets/welcome-illustration.png';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center">
            <Crown className="w-7 h-7 text-todo-dark" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-todo-text">MY TODO</h1>
          </div>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto bg-gradient-card rounded-3xl p-6 shadow-card">
            <img 
              src={welcomeImage} 
              alt="Productivity illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-todo-text mb-4">
            MANAGE YOUR<br />
            TASK WITH<br />
            <span className="text-todo-orange">MYTODO</span>
          </h2>
        </div>

        {/* CTA Button */}
        <CustomButton
          variant="primary"
          size="lg"
          onClick={() => navigate('/login')}
        >
          Let's Start
        </CustomButton>
      </div>
    </div>
  );
};

export default Welcome;
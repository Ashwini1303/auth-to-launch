import React from 'react';
import { ArrowLeft, User, Mail, Lock, Bell, Shield, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './ui/custom-button';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-todo-card px-6 py-6 rounded-b-3xl shadow-card">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 bg-background rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-todo-text" />
          </button>
          <h1 className="text-xl font-bold text-todo-text">Profile</h1>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-todo-dark" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-todo-text">Fazal Laghari</h2>
            <p className="text-todo-text-muted">fazal72@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-6 space-y-4">
        <div className="bg-todo-card rounded-2xl p-1 shadow-card">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-todo-border transition-colors">
            <div className="w-10 h-10 bg-todo-border rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-todo-text" />
            </div>
            <span className="text-todo-text font-medium">Profile</span>
          </button>
        </div>

        <div className="bg-todo-card rounded-2xl p-1 shadow-card">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-todo-border transition-colors">
            <div className="w-10 h-10 bg-todo-border rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-todo-text" />
            </div>
            <span className="text-todo-text font-medium">fazal72@gmail.com</span>
          </button>
        </div>

        <div className="bg-todo-card rounded-2xl p-1 shadow-card">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-todo-border transition-colors">
            <div className="w-10 h-10 bg-todo-border rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-todo-text" />
            </div>
            <span className="text-todo-text font-medium">Password</span>
          </button>
        </div>

        <div className="bg-todo-card rounded-2xl p-1 shadow-card">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-todo-border transition-colors">
            <div className="w-10 h-10 bg-todo-border rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-todo-text" />
            </div>
            <span className="text-todo-text font-medium">My Tasks</span>
          </button>
        </div>

        <div className="bg-todo-card rounded-2xl p-1 shadow-card">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-todo-border transition-colors">
            <div className="w-10 h-10 bg-todo-border rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-todo-text" />
            </div>
            <span className="text-todo-text font-medium">Privacy</span>
          </button>
        </div>

        <div className="bg-todo-card rounded-2xl p-1 shadow-card">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-todo-border transition-colors">
            <div className="w-10 h-10 bg-todo-border rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-todo-text" />
            </div>
            <span className="text-todo-text font-medium">Setting</span>
          </button>
        </div>

        <div className="pt-6">
          <CustomButton 
            variant="primary" 
            onClick={handleLogout}
            className="bg-destructive hover:bg-destructive/90"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
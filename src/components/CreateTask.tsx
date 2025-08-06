import React, { useState } from 'react';
import { ArrowLeft, Plus, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './ui/custom-button';
import { InputField } from './ui/input-field';

const CreateTask: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '10:30 AM'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save the task
    navigate('/dashboard');
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
          <h1 className="text-xl font-bold text-todo-text">Create New Task</h1>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-todo-text-muted font-medium mb-2 block">Task Title</label>
            <InputField
              type="text"
              name="title"
              placeholder="Review Gym"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="text-sm text-todo-text-muted font-medium mb-2 block">Task Details</label>
            <textarea
              name="description"
              placeholder="Read last 3 chapters. Focus on key terms and 2 weeks questions. Practice notes."
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-todo-card border border-todo-border rounded-xl text-todo-text placeholder:text-todo-text-muted focus:outline-none focus:ring-2 focus:ring-todo-orange focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="text-sm text-todo-text-muted font-medium mb-2 block">Time & Date</label>
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-todo-text-muted" />
                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 bg-todo-card border border-todo-border rounded-xl text-todo-text focus:outline-none focus:ring-2 focus:ring-todo-orange focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex-1">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-todo-card border border-todo-border rounded-xl text-todo-text focus:outline-none focus:ring-2 focus:ring-todo-orange focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <CustomButton 
              type="button" 
              variant="secondary"
              className="mb-4"
            >
              <Plus className="w-5 h-5" />
              Add New
            </CustomButton>
            
            <CustomButton 
              type="submit" 
              variant="primary"
            >
              Create
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
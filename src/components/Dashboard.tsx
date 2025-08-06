import React, { useState } from 'react';
import { Crown, Search, Plus, CheckCircle, Circle, Calendar, User, Clock, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Study for Maths Test', category: 'Education', completed: false, priority: 'high', dueDate: 'Today' },
    { id: 2, title: 'Submit Science Lab Report', category: 'Education', completed: true, priority: 'medium', dueDate: 'Yesterday' },
    { id: 3, title: 'Complete English Assignment', category: 'Education', completed: false, priority: 'medium', dueDate: 'Tomorrow' },
    { id: 4, title: 'Prepare for Class Presentation', category: 'Education', completed: false, priority: 'high', dueDate: 'Due on: 30 August' },
    { id: 5, title: 'History: Complete Chapter 4', category: 'Education', completed: false, priority: 'low' }
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-todo-card px-6 py-6 rounded-b-3xl shadow-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-todo-dark" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-todo-text">MY TODO</h1>
            </div>
          </div>
          <button 
            onClick={() => navigate('/profile')}
            className="w-10 h-10 bg-todo-orange rounded-full flex items-center justify-center"
          >
            <User className="w-6 h-6 text-todo-dark" />
          </button>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-todo-text mb-1">
            <span className="block">Hi!</span>
            <span className="text-todo-orange">Fazal Laghari</span>
          </h2>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-todo-text-muted" />
          <input
            type="text"
            placeholder="Search your task..."
            className="w-full pl-12 pr-4 py-3 bg-background rounded-xl text-todo-text placeholder:text-todo-text-muted focus:outline-none focus:ring-2 focus:ring-todo-orange"
          />
        </div>
      </div>

      {/* Task Sections */}
      <div className="px-6 py-6">
        {/* Completed Tasks */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-todo-text">Completed Tasks</h3>
            <button className="text-todo-orange text-sm font-medium">See all</button>
          </div>
          
          <div className="bg-gradient-orange rounded-2xl p-4 shadow-button">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-todo-dark font-semibold mb-1">Study for Maths Test</h4>
                <p className="text-todo-dark/70 text-sm">Education</p>
              </div>
              <div className="text-right">
                <div className="bg-todo-dark/20 rounded-full px-3 py-1 mb-2">
                  <span className="text-todo-dark text-sm font-medium">Submit</span>
                </div>
                <p className="text-todo-dark/70 text-xs">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Work */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-todo-text">Ongoing Work</h3>
            <button className="text-todo-orange text-sm font-medium">See all</button>
          </div>
          
          <div className="space-y-3">
            {tasks.filter(task => !task.completed).map((task) => (
              <div key={task.id} className="bg-todo-card rounded-2xl p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <button onClick={() => toggleTask(task.id)}>
                        <Circle className="w-6 h-6 text-todo-text-muted hover:text-todo-orange transition-colors" />
                      </button>
                      <h4 className="text-todo-text font-medium">{task.title}</h4>
                    </div>
                    <div className="flex items-center gap-4 ml-9">
                      <span className="text-todo-text-muted text-sm">{task.category}</span>
                      {task.dueDate && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-todo-text-muted" />
                          <span className="text-todo-text-muted text-sm">{task.dueDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="p-2">
                    <MoreVertical className="w-5 h-5 text-todo-text-muted" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-todo-card border-t border-todo-border">
        <div className="flex items-center justify-around py-4 px-6">
          <button className="p-2">
            <div className="w-8 h-8 bg-todo-orange rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-todo-dark rounded"></div>
            </div>
          </button>
          <button onClick={() => navigate('/schedule')} className="p-2">
            <Calendar className="w-6 h-6 text-todo-text-muted" />
          </button>
          <button 
            onClick={() => navigate('/create-task')}
            className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center shadow-button"
          >
            <Plus className="w-6 h-6 text-todo-dark" />
          </button>
          <button className="p-2">
            <User className="w-6 h-6 text-todo-text-muted" />
          </button>
          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-todo-text-muted" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
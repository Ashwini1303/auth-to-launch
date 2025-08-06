import React, { useState } from 'react';
import { ArrowLeft, Search, Plus, Edit, Trash2, Clock, Calendar, Filter, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from './ui/custom-button';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  createdAt: string;
}

const TaskList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending'>('all');
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Write Introduction Paragraph',
      description: 'English writing first essay on "Global Warming" and add interesting questions. Practice notes.',
      category: 'Education',
      completed: false,
      priority: 'high',
      dueDate: '1 August',
      createdAt: '28 July'
    },
    {
      id: 2,
      title: 'Complete Workbook Questions',
      description: 'Finish writing first essay on Global Warming and add interesting questions. Practice notes.',
      category: 'Education',
      completed: true,
      priority: 'medium',
      dueDate: '30 July',
      createdAt: '25 July'
    },
    {
      id: 3,
      title: 'Grammar Check',
      description: 'Review grammar rules for essay writing and practice exercises.',
      category: 'Education',
      completed: false,
      priority: 'low',
      dueDate: '2 August',
      createdAt: '29 July'
    },
    {
      id: 4,
      title: 'Final Proofreading',
      description: 'Final review and proofreading of all completed assignments.',
      category: 'Education',
      completed: false,
      priority: 'medium',
      dueDate: '5 August',
      createdAt: '30 July'
    },
    {
      id: 5,
      title: 'Upload Assignment to Portal',
      description: 'Submit all completed assignments to the school portal before deadline.',
      category: 'Education',
      completed: false,
      priority: 'high',
      dueDate: '3 August',
      createdAt: '1 August'
    }
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'completed' && task.completed) ||
                         (filterStatus === 'pending' && !task.completed);
    
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-todo-orange';
      case 'low': return 'bg-green-500';
      default: return 'bg-todo-text-muted';
    }
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-todo-card px-6 py-6 rounded-b-3xl shadow-card">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-10 h-10 bg-background rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-todo-text" />
          </button>
          <h1 className="text-xl font-bold text-todo-text">Task Details</h1>
        </div>

        {/* Task Progress Card */}
        <div className="bg-gradient-orange rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-todo-dark font-semibold">COMPLETE ENGLISH ASSIGNMENT</h3>
            <button className="w-8 h-8 bg-todo-dark/20 rounded-full flex items-center justify-center">
              <Edit className="w-4 h-4 text-todo-dark" />
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-todo-dark/80 text-sm">
              <span>Project Details</span>
              <span>{completedCount}/{totalTasks} Completed</span>
            </div>
            
            <div className="text-todo-dark/70 text-sm leading-relaxed">
              Finish writing first essay on "Global Warming" and add interesting questions. Practice notes.
            </div>

            <div className="mt-4">
              <div className="text-todo-dark/80 text-sm mb-2">Project Progress</div>
              <div className="w-full bg-todo-dark/20 rounded-full h-2">
                <div 
                  className="bg-todo-dark h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="text-todo-dark/70 text-xs mt-1">{Math.round(progressPercentage)}% Complete</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-todo-text-muted" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background rounded-xl text-todo-text placeholder:text-todo-text-muted focus:outline-none focus:ring-2 focus:ring-todo-orange"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'all' ? 'bg-todo-orange text-todo-dark' : 'bg-background text-todo-text'
              }`}
            >
              All Tasks
            </button>
            <button
              onClick={() => setFilterStatus('pending')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'pending' ? 'bg-todo-orange text-todo-dark' : 'bg-background text-todo-text'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'completed' ? 'bg-todo-orange text-todo-dark' : 'bg-background text-todo-text'
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      {/* All Tasks */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-todo-text">All Tasks</h3>
          <button 
            onClick={() => navigate('/create-task')}
            className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center"
          >
            <Plus className="w-5 h-5 text-todo-dark" />
          </button>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div key={task.id} className="bg-todo-card rounded-2xl p-4 shadow-card">
              <div className="flex items-start gap-3">
                <button 
                  onClick={() => toggleTask(task.id)}
                  className="mt-1"
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed 
                      ? 'bg-todo-orange border-todo-orange' 
                      : 'border-todo-text-muted hover:border-todo-orange'
                  }`}>
                    {task.completed && <div className="w-3 h-3 bg-todo-dark rounded-full" />}
                  </div>
                </button>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className={`font-medium mb-2 ${task.completed ? 'text-todo-text-muted line-through' : 'text-todo-text'}`}>
                        {task.title}
                      </h4>
                      <p className="text-todo-text-muted text-sm mb-3 leading-relaxed">
                        {task.description}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-todo-text-muted" />
                          <span className="text-todo-text-muted text-sm">Due: {task.dueDate}</span>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`} />
                        <span className="text-todo-orange text-sm font-medium capitalize">{task.priority}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => navigate(`/edit-task/${task.id}`)}
                        className="w-8 h-8 bg-todo-border rounded-lg flex items-center justify-center hover:bg-todo-orange hover:text-todo-dark transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deleteTask(task.id)}
                        className="w-8 h-8 bg-todo-border rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-todo-card rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-todo-text-muted" />
            </div>
            <h3 className="text-todo-text font-medium mb-2">No tasks found</h3>
            <p className="text-todo-text-muted text-sm">Try adjusting your search or filter criteria</p>
          </div>
        )}

        <div className="mt-8">
          <CustomButton 
            onClick={() => navigate('/create-task')}
            variant="primary"
          >
            <Plus className="w-5 h-5" />
            Add Task
          </CustomButton>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-todo-card border-t border-todo-border">
        <div className="flex items-center justify-around py-4 px-6">
          <button onClick={() => navigate('/dashboard')} className="p-2">
            <div className="w-6 h-6 bg-todo-text-muted rounded"></div>
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
            <div className="w-8 h-8 bg-todo-orange rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-todo-dark rounded"></div>
            </div>
          </button>
          <button onClick={() => navigate('/profile')} className="p-2">
            <div className="w-6 h-6 bg-todo-text-muted rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
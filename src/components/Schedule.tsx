import React, { useState } from 'react';
import { ArrowLeft, Plus, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { CustomButton } from './ui/custom-button';

interface ScheduleTask {
  id: number;
  title: string;
  time: string;
  category: string;
  completed: boolean;
}

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Sample tasks for different dates
  const todaysTasks: ScheduleTask[] = [
    { id: 1, title: 'Revise Chemistry Notes', time: '8:00 - 9:00', category: 'Education', completed: false },
    { id: 2, title: 'Complete English Essay', time: '10:00 - 11:30', category: 'Education', completed: true },
    { id: 3, title: 'Prepare Science Lab', time: '2:00 - 3:30', category: 'Education', completed: false },
    { id: 4, title: 'Read History Chapter 4', time: '4:00 - 5:00', category: 'Education', completed: false },
    { id: 5, title: 'Solve Maths Worksheet', time: '7:00 - 8:00', category: 'Education', completed: false }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentMonth);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentMonth(newDate);
  };

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
          <h1 className="text-xl font-bold text-todo-text">Schedule</h1>
        </div>

        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-todo-text">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => navigateMonth('prev')}
              className="w-8 h-8 bg-background rounded-lg flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-todo-text" />
            </button>
            <button 
              onClick={() => navigateMonth('next')}
              className="w-8 h-8 bg-background rounded-lg flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-todo-text" />
            </button>
          </div>
        </div>

        {/* Mini Calendar */}
        <div className="bg-background rounded-2xl p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            className="w-full p-0 pointer-events-auto"
            classNames={{
              months: "flex w-full",
              month: "space-y-4 w-full",
              caption: "hidden",
              caption_label: "text-sm font-medium text-todo-text",
              nav: "hidden",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex w-full",
              head_cell: "text-todo-text-muted rounded-md w-full font-normal text-[0.8rem] flex-1 text-center py-2",
              row: "flex w-full mt-2",
              cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 flex-1",
              day: "h-8 w-full p-0 font-normal text-todo-text hover:bg-todo-border rounded-lg transition-colors flex items-center justify-center",
              day_selected: "bg-gradient-orange text-todo-dark hover:bg-gradient-orange hover:text-todo-dark focus:bg-gradient-orange focus:text-todo-dark",
              day_today: "bg-todo-border text-todo-text",
              day_outside: "text-todo-text-muted opacity-50",
              day_disabled: "text-todo-text-muted opacity-50",
              day_hidden: "invisible",
            }}
          />
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-todo-text">Today's Tasks</h3>
          <button 
            onClick={() => navigate('/create-task')}
            className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center"
          >
            <Plus className="w-5 h-5 text-todo-dark" />
          </button>
        </div>

        <div className="space-y-3">
          {todaysTasks.map((task) => (
            <div key={task.id} className="bg-todo-card rounded-2xl p-4 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-4 h-4 rounded-full ${task.completed ? 'bg-todo-orange' : 'border-2 border-todo-text-muted'}`} />
                    <h4 className={`font-medium ${task.completed ? 'text-todo-text-muted line-through' : 'text-todo-text'}`}>
                      {task.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-4 ml-7">
                    <span className="text-todo-text-muted text-sm">{task.time}</span>
                    <span className="text-todo-orange text-sm font-medium">{task.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-todo-card border-t border-todo-border">
        <div className="flex items-center justify-around py-4 px-6">
          <button onClick={() => navigate('/dashboard')} className="p-2">
            <div className="w-6 h-6 bg-todo-text-muted rounded"></div>
          </button>
          <button className="p-2">
            <div className="w-8 h-8 bg-todo-orange rounded-lg flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 text-todo-dark" />
            </div>
          </button>
          <button 
            onClick={() => navigate('/create-task')}
            className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center shadow-button"
          >
            <Plus className="w-6 h-6 text-todo-dark" />
          </button>
          <button onClick={() => navigate('/tasks')} className="p-2">
            <div className="w-6 h-6 bg-todo-text-muted rounded"></div>
          </button>
          <button onClick={() => navigate('/profile')} className="p-2">
            <div className="w-6 h-6 bg-todo-text-muted rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
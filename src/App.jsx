import React, { useState, useEffect } from 'react';
import GradeTable from './components/GradeTable';
import SGPACalculator from './components/SGPACalculator';
import CGPACalculator from './components/CGPACalculator';
import Button from './components/common/Button';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [activeTab, setActiveTab] = useState('sgpa');

  useEffect(() => {
    // Check system preference and localStorage for dark mode
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 md:py-8 px-4">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-2">
            KIIT SGPA/CGPA Calculator
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            Calculate your Semester GPA and Cumulative GPA easily
          </p>
        </div>

        <div className="mb-6 md:mb-8 overflow-x-auto">
          <GradeTable />
        </div>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
            <Button
              variant={activeTab === 'sgpa' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('sgpa')}
              className="flex-1 md:flex-none"
            >
              Calculate SGPA
            </Button>
            <Button
              variant={activeTab === 'cgpa' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('cgpa')}
              className="flex-1 md:flex-none"
            >
              Calculate CGPA
            </Button>
          </div>

          {activeTab === 'sgpa' ? <SGPACalculator /> : <CGPACalculator />}
        </div>
      </div>
    </div>
  );
}

export default App;
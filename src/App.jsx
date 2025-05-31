import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GradeTable from './components/GradeTable';
import SGPACalculator from './components/SGPACalculator';
import CGPACalculator from './components/CGPACalculator';
import HowToUse from './components/HowToUse';
// import ThemeToggle from './components/ThemeToggle';
import Button from './components/common/Button';

function App() {
  const [activeTab, setActiveTab] = useState('sgpa');

  useEffect(() => {
    // Check system preference and localStorage for dark mode
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* <ThemeToggle /> */}
      <Header />
      
      <main className="py-4 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              KIIT SGPA/CGPA Calculator
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Calculate your Semester GPA and Cumulative GPA easily
            </p>
          </div>

          <div className="mb-6 md:mb-8 overflow-x-auto">
            <GradeTable />
          </div>

          <div id="calculator" className="mb-6">
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

          <HowToUse />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
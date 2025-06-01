import React, { useState, useEffect } from 'react';
import Button from './common/Button';
import SemesterForm from './semester/SemesterForm';
// import ThemeToggle from './ThemeToggle';
import { calculateSGPA, calculateCGPA } from '../utils/calculationUtils';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';
import { useSemesterManagement } from '../hooks/useSemesterManagement';
import ResultsDisplay from './results/ResultsDisplay';

const CGPACalculator = () => {
  const {
    semesters,
    addSemester,
    removeSemester,
    addSubject,
    removeSubject,
    handleSubjectChange,
  } = useSemesterManagement();
  
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const calculateResults = () => {
    const semesterResults = semesters.map(semester => ({
      number: semester.number,
      sgpa: calculateSGPA(semester.subjects)
    }));

    setResults({
      semesters: semesterResults,
      cgpa: calculateCGPA(semesters)
    });
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      {/* <ThemeToggle /> */}
      <div className="max-w-8xl mx-auto">
        <div className="space-y-6">
          {semesters.map((semester, index) => (
            <div
              key={index}
              className="rounded-xl p-4 sm:p-6"
              style={{
                background: "linear-gradient(to right, #000000, #181A20)",
                border: "0.5px solid rgba(255,255,255,0.08)"
              }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white">Semester {semester.number}</h3>
                {semesters.length > 1 && (
                  <Button
                    variant="danger"
                    onClick={() => removeSemester(index)}
                    className="w-full sm:w-auto"
                  >
                    Remove Semester
                  </Button>
                )}
              </div>
              
              <SemesterForm
                semester={semester}
                onAddSubject={addSubject}
                onRemoveSubject={removeSubject}
                onSubjectChange={handleSubjectChange}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            variant="success"
            onClick={addSemester}
            className="w-full sm:w-auto"
          >
            Add Semester
          </Button>
          <Button
            onClick={calculateResults}
            className="w-full sm:w-auto"
          >
            Calculate CGPA
          </Button>
        </div>

        {results && (
          <div
            className="mt-6 rounded-xl p-6"
            style={{
              background: "linear-gradient(to right, #000000, #181A20)",
              border: "0.5px solid rgba(255,255,255,0.08)"
            }}
          >
            <ResultsDisplay results={results} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;

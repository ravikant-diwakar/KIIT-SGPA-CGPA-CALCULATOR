import React, { useState } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import { calculateSGPA } from '../utils/calculationUtils';
import { useSemesterManagement } from '../hooks/useSemesterManagement';
import ResultsDisplay from './results/ResultsDisplay';

const SGPACalculator = () => {
  const {
    semesters,
    addSubject,
    removeSubject,
    handleSubjectChange,
  } = useSemesterManagement();
  
  const [sgpa, setSGPA] = useState(null);

  const calculateResult = () => {
    const result = calculateSGPA(semesters[0].subjects);
    setSGPA(result);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-4">SGPA Calculator</h2>
      <div className="space-y-4">
        {semesters[0].subjects.map((subject, index) => {
          const subjectName = subject.name || `Subject ${index + 1}`;
          
          return (
            <div key={index} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="text"
                placeholder={`Subject ${index + 1}`}
                className="flex-1"
                value={subjectName}
                onChange={(e) => handleSubjectChange(0, index, 'name', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Credits"
                className="w-full sm:w-24"
                value={subject.credits}
                onChange={(e) => handleSubjectChange(0, index, 'credits', e.target.value)}
              />
              <select
                className="w-full sm:w-32 p-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                value={subject.grade}
                onChange={(e) => handleSubjectChange(0, index, 'grade', e.target.value)}
              >
                <option value="">Grade</option>
                <option value="O">O (90-100)</option>
                <option value="E">E (80-89)</option>
                <option value="A">A (70-79)</option>
                <option value="B">B (60-69)</option>
                <option value="C">C (50-59)</option>
                <option value="D">D (40-49)</option>
                <option value="F">F (Below 40)</option>
              </select>
              {semesters[0].subjects.length > 1 && (
                <Button
                  variant="danger"
                  onClick={() => removeSubject(0, index)}
                  className="w-full sm:w-auto"
                >
                  Remove
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button variant="success" onClick={() => addSubject(0)} className="w-full sm:w-auto">
          Add Subject
        </Button>
        <Button onClick={calculateResult} className="w-full sm:w-auto">
          Calculate SGPA
        </Button>
      </div>

      {sgpa !== null && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-xl font-bold">
            Your SGPA: {sgpa.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default SGPACalculator;
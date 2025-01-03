import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Results</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold mb-2">Semester-wise SGPA</h4>
          <div className="space-y-2">
            {results.semesters.map((sem) => (
              <div key={sem.number} className="flex justify-between">
                <span>Semester {sem.number}:</span>
                <span className="font-bold">{sem.sgpa.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary-dark dark:bg-primary text-white p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Cumulative GPA</h4>
          <div className="text-4xl font-bold">{results.cgpa.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
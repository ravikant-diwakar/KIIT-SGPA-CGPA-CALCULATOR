import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div
      className="mt-6 rounded-xl p-6"
      style={{
        background: "linear-gradient(to right, #000000, #181A20)",
        border: "0.5px solid rgba(255,255,255,0.08)"
      }}
    >
      <h3 className="text-xl font-bold text-white mb-4">Results</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold text-white mb-2">Semester-wise SGPA</h4>
          <div className="space-y-2">
            {results.semesters.map((sem) => (
              <div key={sem.number} className="flex justify-between">
                <span className="text-gray-300">Semester {sem.number}:</span>
                <span className="font-bold text-white">{sem.sgpa.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="p-6 rounded-lg"
          style={{
            background: "linear-gradient(to right, #000000, #23262F)",
            border: "0.5px solid rgba(255,255,255,0.08)"
          }}
        >
          <h4 className="font-semibold text-white mb-2">Cumulative GPA</h4>
          <div className="text-4xl font-bold text-white">{results.cgpa.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;

import React from 'react';

const GradeTable = () => {
  const grades = [
    { grade: 'O', score: '90-100', points: 10, interpretation: 'Outstanding' },
    { grade: 'E', score: '80-89', points: 9, interpretation: 'Excellent' },
    { grade: 'A', score: '70-79', points: 8, interpretation: 'Very Good' },
    { grade: 'B', score: '60-69', points: 7, interpretation: 'Good' },
    { grade: 'C', score: '50-59', points: 6, interpretation: 'Average' },
    { grade: 'D', score: '40-49', points: 5, interpretation: 'Below Average' },
    { grade: 'F', score: 'Below 40', points: 0, interpretation: 'Fail' },
  ];

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-6 py-3">Grade</th>
            <th className="px-6 py-3">Score</th>
            <th className="px-6 py-3">Grade Points</th>
            <th className="px-6 py-3">Interpretation</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 text-center font-semibold">{item.grade}</td>
              <td className="px-6 py-4 text-center">{item.score}</td>
              <td className="px-6 py-4 text-center">{item.points}</td>
              <td className="px-6 py-4 text-center">{item.interpretation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
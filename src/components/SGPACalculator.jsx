// import React, { useState } from 'react';
// import Button from './common/Button';
// import Input from './common/Input';
// import { calculateSGPA } from '../utils/calculationUtils';
// import { useSemesterManagement } from '../hooks/useSemesterManagement';
// import ResultsDisplay from './results/ResultsDisplay';

// const SGPACalculator = () => {
//   const {
//     semesters,
//     addSubject,
//     removeSubject,
//     handleSubjectChange,
//   } = useSemesterManagement();
  
//   const [sgpa, setSGPA] = useState(null);

//   const calculateResult = () => {
//     const result = calculateSGPA(semesters[0].subjects);
//     setSGPA(result);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
//       <h2 className="text-xl font-bold mb-4">SGPA Calculator</h2>
//       <div className="space-y-4">
//         {semesters[0].subjects.map((subject, index) => {
//           const subjectName = subject.name || `Subject ${index + 1}`;
          
//           return (
//             <div key={index} className="flex flex-col sm:flex-row gap-2">
//               <Input
//                 type="text"
//                 placeholder={`Subject ${index + 1}`}
//                 className="flex-1"
//                 value={subjectName}
//                 onChange={(e) => handleSubjectChange(0, index, 'name', e.target.value)}
//               />
//               <Input
//                 type="number"
//                 placeholder="Credits"
//                 className="w-full sm:w-24"
//                 value={subject.credits}
//                 onChange={(e) => handleSubjectChange(0, index, 'credits', e.target.value)}
//               />
//               <select
//                 className="w-full sm:w-32 p-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
//                 value={subject.grade}
//                 onChange={(e) => handleSubjectChange(0, index, 'grade', e.target.value)}
//               >
//                 <option value="">Grade</option>
//                 <option value="O">O (90-100)</option>
//                 <option value="E">E (80-89)</option>
//                 <option value="A">A (70-79)</option>
//                 <option value="B">B (60-69)</option>
//                 <option value="C">C (50-59)</option>
//                 <option value="D">D (40-49)</option>
//                 <option value="F">F (Below 40)</option>
//               </select>
//               {semesters[0].subjects.length > 1 && (
//                 <Button
//                   variant="danger"
//                   onClick={() => removeSubject(0, index)}
//                   className="w-full sm:w-auto"
//                 >
//                   Remove
//                 </Button>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 mt-6">
//         <Button variant="success" onClick={() => addSubject(0)} className="w-full sm:w-auto">
//           Add Subject
//         </Button>
//         <Button onClick={calculateResult} className="w-full sm:w-auto">
//           Calculate SGPA
//         </Button>
//       </div>

//       {sgpa !== null && (
//         <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
//           <p className="text-xl font-bold">
//             Your SGPA: {sgpa.toFixed(2)}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SGPACalculator;

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
    <div
      className="rounded-xl p-4 sm:p-6"
      style={{
        background: "linear-gradient(to right, #000000, #181A20)",
        border: "0.5px solid rgba(255,255,255,0.08)"
      }}
    >
      <h2 className="text-xl font-bold text-white mb-4">SGPA Calculator</h2>
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
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.75rem",
                }}
              />
              <Input
                type="number"
                placeholder="Credits"
                className="w-full sm:w-24"
                value={subject.credits}
                onChange={(e) => handleSubjectChange(0, index, 'credits', e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.75rem",
                }}
              />
              <select
                className="w-full sm:w-32"
                value={subject.grade}
                onChange={(e) => handleSubjectChange(0, index, 'grade', e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.75rem",
                }}
              >
                <option value="" style={{ background: "#181A20", color: "white" }}>Grade</option>
                <option value="O" style={{ background: "#181A20", color: "white" }}>O (90-100)</option>
                <option value="E" style={{ background: "#181A20", color: "white" }}>E (80-89)</option>
                <option value="A" style={{ background: "#181A20", color: "white" }}>A (70-79)</option>
                <option value="B" style={{ background: "#181A20", color: "white" }}>B (60-69)</option>
                <option value="C" style={{ background: "#181A20", color: "white" }}>C (50-59)</option>
                <option value="D" style={{ background: "#181A20", color: "white" }}>D (40-49)</option>
                <option value="F" style={{ background: "#181A20", color: "white" }}>F (Below 40)</option>
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
        <div
          className="mt-6 p-4 rounded-lg"
          style={{
            background: "linear-gradient(to right, #000000, #181A20)",
            border: "0.5px solid rgba(255,255,255,0.08)"
          }}
        >
          <p className="text-xl font-bold text-white">
            Your SGPA: {sgpa.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default SGPACalculator;

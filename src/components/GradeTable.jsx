import React from "react";

const grades = [
  { grade: "O", score: "90-100", points: 10, interpretation: "Outstanding" },
  { grade: "E", score: "80-89", points: 9, interpretation: "Excellent" },
  { grade: "A", score: "70-79", points: 8, interpretation: "Very Good" },
  { grade: "B", score: "60-69", points: 7, interpretation: "Good" },
  { grade: "C", score: "50-59", points: 6, interpretation: "Average" },
  { grade: "D", score: "40-49", points: 5, interpretation: "Below Average" },
  { grade: "F", score: "Below 40", points: 0, interpretation: "Fail" },
];

const GradeTable = () => (
  <div
    className="rounded-xl overflow-hidden"
    style={{
      border: "0.5px solid rgba(255, 255, 255, 0.08)",
      background: 'linear-gradient(145deg, #111111, #1a1a1a)',
      margin: "32px 0",
    }}
  >
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-black text-white">
            <th className="px-4 py-3 text-left text-xs sm:text-sm opacity-90 font-semibold tracking-wide">
              Grade
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm opacity-90 font-semibold tracking-wide">
              Score
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm opacity-90 font-semibold tracking-wide">
              Grade Points
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm opacity-90 font-semibold tracking-wide">
              Interpretation
            </th>
          </tr>
        </thead>
        <tbody>
          {grades.map((item, index) => (
            <tr
              key={index}
              className="border-t"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <td className="px-4 py-3 text-xs sm:text-sm text-white opacity-90">
                <span
                  className="inline-block px-2 py-1 rounded bg-white text-black text-xs font-bold"
                  style={{ minWidth: "20px", textAlign: "center" }}
                >
                  {item.grade}
                </span>
              </td>
              <td
                className="px-4 py-3 text-xs sm:text-sm text-white opacity-90"
                style={{ whiteSpace: "nowrap" }}
              >
                {item.score}
              </td>
              <td className="px-4 py-3 text-xs sm:text-sm text-white opacity-90">
                {item.points}
              </td>
              <td className="px-4 py-3 text-xs sm:text-sm text-white opacity-90">
                {item.interpretation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default GradeTable;
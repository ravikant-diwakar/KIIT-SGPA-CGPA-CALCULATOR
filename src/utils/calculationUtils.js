// Credit point calculation for a single subject
export const calculateCreditPoint = (credit, grade) => {
  const gradePoints = {
    'O': 10, 'E': 9, 'A': 8, 'B': 7, 'C': 6, 'D': 5, 'F': 0
  };
  const point = gradePoints[grade] || 0;
  return credit * point;
};

// Calculate Credit Index (CI) for a semester
export const calculateCreditIndex = (subjects) => {
  return subjects.reduce((total, subject) => {
    const credit = parseFloat(subject.credits) || 0;
    return total + calculateCreditPoint(credit, subject.grade);
  }, 0);
};

// Calculate total credits for a semester
export const calculateSemesterCredits = (subjects) => {
  return subjects.reduce((total, subject) => {
    return total + (parseFloat(subject.credits) || 0);
  }, 0);
};

// Calculate SGPA for a semester
export const calculateSGPA = (subjects) => {
  const creditIndex = calculateCreditIndex(subjects);
  const totalCredits = calculateSemesterCredits(subjects);
  return totalCredits > 0 ? creditIndex / totalCredits : 0;
};

// Calculate CGPA across all semesters
export const calculateCGPA = (semesters) => {
  let totalCreditIndex = 0;
  let totalCredits = 0;

  semesters.forEach(semester => {
    totalCreditIndex += calculateCreditIndex(semester.subjects);
    totalCredits += calculateSemesterCredits(semester.subjects);
  });

  return totalCredits > 0 ? totalCreditIndex / totalCredits : 0;
};
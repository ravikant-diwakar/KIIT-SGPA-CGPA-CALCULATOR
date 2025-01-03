export const getGradePoints = (grade) => {
  const gradePoints = {
    'O': 10,
    'E': 9,
    'A': 8,
    'B': 7,
    'C': 6,
    'D': 5,
    'F': 0
  };
  return gradePoints[grade] || 0;
};

export const calculateCreditPoints = (subjects) => {
  return subjects.reduce((total, subject) => {
    const credits = parseFloat(subject.credits) || 0;
    const points = getGradePoints(subject.grade);
    return total + (credits * points);
  }, 0);
};

export const calculateTotalCredits = (subjects) => {
  return subjects.reduce((total, subject) => {
    return total + (parseFloat(subject.credits) || 0);
  }, 0);
};
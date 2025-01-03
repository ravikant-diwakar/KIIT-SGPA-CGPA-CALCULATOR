import { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

export const useSemesterManagement = () => {
  const [semesters, setSemesters] = useState(() => 
    loadFromLocalStorage('semesters', [{
      number: 1,
      subjects: [{ name: '', credits: '', grade: '' }]
    }])
  );

  useEffect(() => {
    saveToLocalStorage('semesters', semesters);
  }, [semesters]);

  const addSemester = () => {
    setSemesters(prev => [
      ...prev,
      {
        number: prev.length + 1,
        subjects: [{ name: '', credits: '', grade: '' }]
      }
    ]);
  };

  const removeSemester = (index) => {
    setSemesters(prev => {
      const newSemesters = prev.filter((_, i) => i !== index);
      // Renumber remaining semesters
      return newSemesters.map((sem, i) => ({
        ...sem,
        number: i + 1
      }));
    });
  };

  const addSubject = (semesterIndex) => {
    setSemesters(prev => {
      const newSemesters = [...prev];
      newSemesters[semesterIndex] = {
        ...newSemesters[semesterIndex],
        subjects: [
          ...newSemesters[semesterIndex].subjects,
          { name: '', credits: '', grade: '' }
        ]
      };
      return newSemesters;
    });
  };

  const removeSubject = (semesterIndex, subjectIndex) => {
    setSemesters(prev => {
      const newSemesters = [...prev];
      newSemesters[semesterIndex] = {
        ...newSemesters[semesterIndex],
        subjects: newSemesters[semesterIndex].subjects.filter((_, i) => i !== subjectIndex)
      };
      return newSemesters;
    });
  };

  const handleSubjectChange = (semesterIndex, subjectIndex, field, value) => {
    setSemesters(prev => {
      const newSemesters = [...prev];
      newSemesters[semesterIndex] = {
        ...newSemesters[semesterIndex],
        subjects: newSemesters[semesterIndex].subjects.map((subject, i) =>
          i === subjectIndex ? { ...subject, [field]: value } : subject
        )
      };
      return newSemesters;
    });
  };

  return {
    semesters,
    addSemester,
    removeSemester,
    addSubject,
    removeSubject,
    handleSubjectChange,
  };
};
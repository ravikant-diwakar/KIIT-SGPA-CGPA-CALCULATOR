import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const SemesterForm = ({ semester, onAddSubject, onRemoveSubject, onSubjectChange }) => {
  return (
    <div className="space-y-4">
      {semester.subjects.map((subject, subIndex) => {
        // Auto-generate subject name if empty
        const subjectName = subject.name || `Subject ${subIndex + 1}`;
        
        return (
          <div key={subIndex} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="text"
              placeholder={`Subject ${subIndex + 1}`}
              className="flex-1"
              value={subjectName}
              onChange={(e) => onSubjectChange(semester.number - 1, subIndex, 'name', e.target.value)}
            />
            <Input
              type="number"
              placeholder="Credits"
              className="w-full sm:w-24"
              value={subject.credits}
              onChange={(e) => onSubjectChange(semester.number - 1, subIndex, 'credits', e.target.value)}
            />
            <select
              className="w-full sm:w-32 p-2 border rounded focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
              value={subject.grade}
              onChange={(e) => onSubjectChange(semester.number - 1, subIndex, 'grade', e.target.value)}
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
            {semester.subjects.length > 1 && (
              <Button
                variant="danger"
                onClick={() => onRemoveSubject(semester.number - 1, subIndex)}
                className="w-full sm:w-auto"
              >
                Remove
              </Button>
            )}
          </div>
        );
      })}
      <Button variant="success" onClick={() => onAddSubject(semester.number - 1)}>
        Add Subject
      </Button>
    </div>
  );
};

export default SemesterForm;
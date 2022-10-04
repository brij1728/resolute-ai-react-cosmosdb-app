import {
  Student,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';
import { useCallback, useEffect, useState } from 'react';

import { StudentForm } from '../../components';
import { useParams } from 'react-router-dom';

export const EditStudentPage = () => {
  const { id } = useParams();

  const [student, setStudent] = useState<Student | null>(null);

  const fetchStudent = useCallback(async (studentId: string) => {
    const response = await fetch(`/api/students/${studentId}`);
    const data = await response.json();
    setStudent(data);
  }, []);

  const onSubmit = useCallback(
    async (studentId: string, updatedStudentData: StudentRequest) => {
      await fetch(`/api/students/${studentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudentData),
      });
      await fetchStudent(studentId);
    },
    [fetchStudent]
  );

  useEffect(() => {
    if (id) {
      fetchStudent(id);
    }
  }, [fetchStudent, id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <StudentForm
      initialValues={student}
      onSave={(data) => onSubmit(student.id, data)}
    />
  );
};

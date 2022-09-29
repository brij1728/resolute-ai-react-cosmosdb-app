import React from 'react';
import { StudentForm } from '../../components';
import { StudentRequest } from '@resolute-ai-react-cosmosdb-app/api-interfaces';

export const AddStudentPage = () => {
  const onStudentSave = async (values: StudentRequest) => {
    await fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  };
  return <StudentForm onSave={onStudentSave} />;
};

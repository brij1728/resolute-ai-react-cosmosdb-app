import { useEffect, useState } from 'react';

import { Student } from '@resolute-ai-react-cosmosdb-app/api-interfaces';

export const ViewStudentForm = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch('/api/students/:id')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);
  console.log(students);

  return <div>ViewStudentForm</div>;
};

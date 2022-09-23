import React, { useEffect, useState } from 'react';

import { RouteComponent } from './routes';
import { StudentRequest } from '@resolute-ai-react-cosmosdb-app/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<StudentRequest>();

  useEffect(() => {
    fetch('/api/students')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return <RouteComponent />;
};

export default App;

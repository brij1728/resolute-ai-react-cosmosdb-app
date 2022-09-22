import 'reflect-metadata';

import { createExpressServer } from 'routing-controllers';
import { initCosmosDb } from './app/db';

import { StudentController } from './app/student.controller';

initCosmosDb().then(() => {
  const app = createExpressServer({
    controllers: [StudentController], // we specify controllers we want to use
  });

  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
  });
  server.on('error', console.error);
});

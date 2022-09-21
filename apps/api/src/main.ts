import "reflect-metadata"

import { createExpressServer } from 'routing-controllers';

import { Message } from '@resolute-ai-react-cosmosdb-app/api-interfaces';
import { StudentController } from './app/student.controller';

const app = createExpressServer({
  controllers: [StudentController], // we specify controllers we want to use
});


const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

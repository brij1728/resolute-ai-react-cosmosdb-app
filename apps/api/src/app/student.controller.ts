import {
  Student,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';
import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
} from 'routing-controllers';
import { addStudent, queryAllStudents } from './student.service';

@JsonController()
export class StudentController {
  @Get('/api/students')
  getAll(): Promise<Student[]> {
    return queryAllStudents();
  }

  @Get('/api/students/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns student #' + id;
  }

  @Post('/api/students')
  post(@Body({ validate: true }) studentRequest: StudentRequest): Student {
    return addStudent(studentRequest) as never;
  }

  @Put('/api/students/:id')
  put(@Param('id') id: string, @Body() studentRequest: StudentRequest) {
    return `Updating a student... ${id} ${studentRequest}`;
  }

  @Delete('/api/students/:id')
  remove(@Param('id') id: string) {
    return `Removing student... ${id}`;
  }
}

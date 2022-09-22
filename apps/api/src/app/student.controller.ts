import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
} from 'routing-controllers';

import {
  Student,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';

import {
  addStudent,
  deleteStudent,
  getStudentDetails,
  queryAllStudents,
  updateStudentDetails,
} from './student.service';

@JsonController()
export class StudentController {
  @Get('/api/students')
  getAll(): Promise<Student[]> {
    return queryAllStudents();
  }

  @Get('/api/students/:id')
  getOne(@Param('id') id: string) {
    return getStudentDetails(id);
  }

  @Post('/api/students')
  post(@Body({ validate: true }) studentRequest: StudentRequest): Student {
    return addStudent(studentRequest) as never;
  }

  @Put('/api/students/:id')
  async put(
    @Param('id') id: string,
    @Body() studentRequest: Partial<StudentRequest>
  ) {
    const student = await getStudentDetails(id);
    console.log(student);
    const updatedStudent = Object.assign(
      new Student(),
      student,
      studentRequest
    );
    return updateStudentDetails(updatedStudent) as never;
  }

  @Delete('/api/students/:id')
  remove(@Param('id') id: string) {
    return deleteStudent(id);
  }
}

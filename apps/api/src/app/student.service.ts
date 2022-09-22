import { validateOrReject } from 'class-validator';

import {
  Student,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';

import { COSMOS_CONTAINER_ID, COSMOS_DATABASE_ID } from './constants';
import { cosmosDbClient } from './db';
import { NotFoundError } from 'routing-controllers';

export const queryAllStudents = async (): Promise<Student[]> => {
  const querySpec = {
    query: 'SELECT * from root',
    parameters: [],
  };

  const { resources: results } = await cosmosDbClient
    .database(COSMOS_DATABASE_ID)
    .container(COSMOS_CONTAINER_ID)
    .items.query(querySpec)
    .fetchAll();

  return results.map((r) => Object.assign(new Student(), r));
};

/**
 * Create student
 */
export const addStudent = async (
  studentRequest: StudentRequest
): Promise<Student> => {
  await validateOrReject(studentRequest);

  const createdAt = new Date();
  const updatedAt = createdAt;

  const { item } = await cosmosDbClient
    .database(COSMOS_DATABASE_ID)
    .container(COSMOS_CONTAINER_ID)
    .items.upsert({ ...studentRequest, createdAt, updatedAt });

  const student = Object.assign(new Student(), studentRequest, {
    id: item.id,
    createdAt,
    updatedAt,
  });
  await validateOrReject(student);

  return student;
};

//  get student by ID
export const getStudentDetails = async (id: string) => {
  const { resource } = await cosmosDbClient
    .database(COSMOS_DATABASE_ID)
    .container(COSMOS_CONTAINER_ID)
    .item(id)
    .read();

  const student = Object.assign(new Student(), resource, {
    createdAt: new Date(resource.createdAt),
    updatedAt: new Date(resource.updatedAt),
  });
  await validateOrReject(student);
  return student;
};

/**
 * Replace the item by ID.
 */
export const updateStudentDetails = async (
  updatedStudent: Student
): Promise<Student> => {
  Object.assign(updatedStudent, { updatedAt: new Date() });
  await validateOrReject(updatedStudent);

  await cosmosDbClient
    .database(COSMOS_DATABASE_ID)
    .container(COSMOS_CONTAINER_ID)
    .item(updatedStudent.id)
    .replace(updatedStudent);

  return updatedStudent;
};

/**
 * Delete the item by ID.
 */
export const deleteStudent = async (id: string) => {
  await cosmosDbClient
    .database(COSMOS_DATABASE_ID)
    .container(COSMOS_CONTAINER_ID)
    .item(id)
    .delete()
    .catch((error) => {
      if (error.message.includes('id does not exist in the system')) {
        throw new NotFoundError(error.message);
      } else {
        throw error;
      }
    });
};

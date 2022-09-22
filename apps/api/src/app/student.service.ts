/**
 * Read the database definition
 */

import {
  Student,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';
import { validateOrReject } from 'class-validator';
import { COSMOS_CONTAINER_ID, COSMOS_DATABASE_ID } from './constants';

import { cosmosDbClient } from './db';

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
 * Create student item if it does not exist
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

//   /**
//    * Replace the item by ID.
//    */
//   const replaceStudentItem = async (itemBody) => {
//     console.log(`Replacing item:\n${itemBody.id}\n`);
//     // Change property 'grade'
//     itemBody.children[0].grade = 6;
//     const { item } = await client
//       .database(COSMOS_DATABASE_ID)
//       .container(COSMOS_CONTAINER_ID)
//       .item(itemBody.id, itemBody.partitionKey)
//       .replace(itemBody);
//   };

//   /**
//    * Delete the item by ID.
//    */
//   const deleteStudentItem = async (itemBody) => {
//     await client
//       .database(COSMOS_DATABASE_ID)
//       .container(COSMOS_CONTAINER_ID)
//       .item(itemBody.id, itemBody.partitionKey)
//       .delete(itemBody);
//     console.log(`Deleted item:\n${itemBody.id}\n`);
//   };

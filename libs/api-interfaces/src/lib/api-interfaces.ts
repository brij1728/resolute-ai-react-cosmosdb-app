export interface Message {
  message: string;
}

import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  IsPositive,
  Min,
  Max,
  IsEnum,
  IsUUID,
} from 'class-validator';

export enum StudentClass {
  Class1 = 'Class 1',
  Class2 = 'Class 2',
  Class3 = 'Class 3',
  Class4 = 'Class 4',
  Class5 = 'Class 5',
  Class6 = 'Class 6',
  Class7 = 'Class 7',
  Class8 = 'Class 8',
  Class9 = 'Class 9',
  Class10 = 'Class 10',
  Class11 = 'Class 11',
  Class12 = 'Class 12',
}

export enum StudentDivision {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

export class StudentRequest {
  @Length(3, 20)
  firstName: string;

  @Length(0, 20)
  middleName: string;

  @Length(2, 20)
  lastName: string;

  @IsEnum(StudentClass)
  class: number;

  @IsEnum(StudentDivision)
  division: string;

  @IsInt()
  @IsPositive()
  rollNumber: number;

  @Length(2, 20)
  addressLineOne: string;

  @Length(0, 20)
  addressLineTwo = '';

  @Length(0, 20)
  landmark = '';

  @Length(2, 20)
  city: string;

  @IsInt()
  @Min(100000)
  @Max(999999)
  pinCode: string;
}

export class Student extends StudentRequest {
  @IsUUID('4')
  id: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}

// import * as yup from 'yup';

import { createValidator } from 'class-validator-formik';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';

import { Box, Button, Stack, TextField } from '@mui/material';
import {
  StudentClassOptions,
  StudentDivisionOptions,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';

import { SelectInput } from '../../atoms/SelectInput';

export const StudentForm = () => {
  const intialValues: StudentRequest = {
    firstName: 'Brijesh',
    middleName: '',
    lastName: '',
    class: 'Class 2',
    division: 'E',
    rollNumber: 53,
    addressLineOne: '',
    addressLineTwo: '',
    landmark: '',
    city: '',
    pinCode: '',
  };

  const saveStudent = useCallback(async (updatedStudent: StudentRequest) => {
    console.log(updatedStudent);
  }, []);

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={async (
        values: StudentRequest,
        formikHelpers: FormikHelpers<StudentRequest>
      ) => {
        await saveStudent(values);
        formikHelpers.resetForm();
      }}
      validate={createValidator(StudentRequest)}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ paddingTop: 5, paddingRight: 3 }}>
            <Stack direction="row" spacing={2}>
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="First Name"
                fullWidth
                error={errors.firstName && touched.firstName}
                helperText={errors.middleName || ''}
              />

              <Field
                name="middleName"
                type="text"
                placeholder="Middle Name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Middle Name"
                fullWidth
                error={errors.middleName && touched.middleName}
                helperText={errors.middleName || ''}
              />
              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Last Name"
                fullWidth
                error={errors.lastName && touched.lastName}
                helperText={errors.lastName || ''}
              />
            </Stack>
            <Box height={14} />

            <Stack direction="row" spacing={2}>
              <Field
                name="class"
                type="text"
                placeholder="Select Class"
                as={SelectInput}
                options={StudentClassOptions}
                variant="outlined"
                color="primary"
                label="Class"
                fullWidth
                error={errors.class && touched.class}
                helperText={errors.class || ''}
              />
              <Field
                name="division"
                type="text"
                placeholder="Select Division"
                as={SelectInput}
                options={StudentDivisionOptions}
                variant="outlined"
                color="primary"
                label="Division"
                fullWidth
                error={errors.division && touched.division}
                helperText={errors.division || ''}
              />
              <Field
                name="rollNumber"
                type="text"
                placeholder="Enter Roll Number in Digits"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Roll Number"
                fullWidth
                error={errors.rollNumber && touched.rollNumber}
                helperText={errors.rollNumber || ''}
              />
            </Stack>
            <Box height={14} />
            <Stack direction="row" spacing={2}>
              <Field
                name="addressLineOne"
                type="text"
                placeholder="Address Line One"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Address Line One "
                fullWidth
                error={errors.addressLineOne && touched.addressLineOne}
                helperText={errors.addressLineOne || ''}
              />
              <Field
                name="addressLineTwo"
                type="text"
                placeholder="Address Line Two"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Address Line Two "
                fullWidth
                error={errors.addressLineTwo && touched.addressLineTwo}
                helperText={errors.addressLineTwo || ''}
              />
            </Stack>
            <Box height={14} />

            <Stack direction="row" spacing={2}>
              <Field
                name="landmark"
                type="text"
                placeholder="Landmark"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Landmark"
                fullWidth
                error={errors.landmark && touched.landmark}
                helperText={errors.landmark || ''}
              />
              <Field
                name="city"
                type="text"
                placeholder="City"
                as={TextField}
                variant="outlined"
                color="primary"
                label="City"
                fullWidth
                error={errors.city && touched.city}
                helperText={errors.city || ''}
              />
              <Field
                name="pinCode"
                type="number"
                placeholder="Pincode"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Pincode"
                fullWidth
                error={errors.pinCode && touched.pinCode}
                helperText={errors.pinCode || ''}
              />
            </Stack>
            <Box height={14} />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
            >
              Add Student
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

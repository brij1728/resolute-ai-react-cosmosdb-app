// import * as yup from 'yup';

import { Box, Button, Stack, TextField } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import {
  StudentClassOptions,
  StudentDivisionOptions,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';

import { SelectInput } from '../../atoms/SelectInput';
import { createValidator } from 'class-validator-formik';

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

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={(
        values: StudentRequest,
        { setSubmitting }: FormikHelpers<StudentRequest>
      ) => {
        alert('Form is validated! Submitting the form...');
        setSubmitting(false);
      }}
      validate={createValidator(StudentRequest)}
    >
      {({ errors, touched, values }) => (
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
                value={values.firstName}
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
                value={values.middleName}
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
                value={values.lastName}
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
                value={values.class}
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
                value={values.division}
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
                vlaue={values.rollNumber}
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
                value={values.addressLineOne}
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
                value={values.addressLineTwo}
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
                value={values.landmark}
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
                value={values.city}
                fullWidth
                error={errors.city && touched.city}
                helperText={errors.city || ''}
              />
              <Field
                name="pinCode"
                type="text"
                placeholder="Pincode"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Pincode"
                value={values.pinCode}
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

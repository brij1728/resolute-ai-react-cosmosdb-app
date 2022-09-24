// import * as yup from 'yup';

import { Box, Button, Stack, TextField } from '@mui/material';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';

import { StudentRequest } from '@resolute-ai-react-cosmosdb-app/api-interfaces';
import { __values } from 'tslib';

export const StudentForm = () => {
  const intialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    class: 2,
    division: '',
    rollNumber: 53,
    addressLineOne: '',
    addressLineTwo: '',
    landmark: '',
    city: '',
    pinCode: '',
  };

  const validationSchema = {};
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
    >
      {() => (
        <Form>
          <Box sx={{ paddingLeft: 5, paddingRight: 5 }}>
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
              />
            </Stack>
            <Box height={14} />

            <Stack direction="row" spacing={2}>
              <Field
                name="class"
                type="text"
                placeholder="Select Class"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Class"
                fullWidth
              />
              <Field
                name="division"
                type="text"
                placeholder="Select Division"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Division"
                fullWidth
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
              />
              <Field
                name="pinCode"
                type="text"
                placeholder="Pincode"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Pincode"
                fullWidth
              />
            </Stack>
            <Box height={14} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
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

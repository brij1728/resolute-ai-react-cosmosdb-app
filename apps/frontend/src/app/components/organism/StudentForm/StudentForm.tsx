import { createValidator } from 'class-validator-formik';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';

import { Box, Button, Stack, TextField } from '@mui/material';
import {
  StudentClassOptions,
  StudentDivisionOptions,
  StudentRequest,
} from '@resolute-ai-react-cosmosdb-app/api-interfaces';

import { SelectInput } from '../../atoms/SelectInput';

export type StudentFormProps = {
  onSave: (values: StudentRequest) => Promise<void>;
  initialValues?: StudentRequest;
  disabled?: boolean;
};

export const StudentForm = ({
  onSave,
  initialValues: _initialValues,
  disabled = false,
}: StudentFormProps) => {
  const initialValues = useState<StudentRequest>({
    firstName: _initialValues?.firstName ?? '',
    middleName: _initialValues?.middleName ?? '',
    lastName: _initialValues?.lastName ?? '',
    class: _initialValues?.class ?? '',
    division: _initialValues?.division ?? '',
    rollNumber: _initialValues?.rollNumber ?? '',
    addressLineOne: _initialValues?.addressLineOne ?? '',
    addressLineTwo: _initialValues?.addressLineTwo ?? '',
    landmark: _initialValues?.landmark ?? '',
    city: _initialValues?.city ?? '',
    pinCode: _initialValues?.pinCode ?? '',
  } as unknown as StudentRequest)[0];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (
        values: StudentRequest,
        formikHelpers: FormikHelpers<StudentRequest>
      ) => {
        await onSave(values);
        formikHelpers.resetForm();
      }}
      validate={createValidator(StudentRequest)}
      disabled={disabled}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ paddingTop: 5, paddingRight: 3 }}>
            <Stack direction="row" spacing={2}>
              <Field
                name="firstName"
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
                type="number"
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
              disabled={disabled}
            >
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

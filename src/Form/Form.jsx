import { Form as FormikForm, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import * as yup from 'yup';

const Form = (props) => {
  const { initialValues, validationSchema, onSubmit, children, ...others } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <FormikForm
          {...others}>
          {children}
        </FormikForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  initialValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape(yup.object),
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Form.defaultProps = {
  initialValues: {},
  validationSchema: yup.object({}),
  onSubmit: () => null,
};

export default Form;

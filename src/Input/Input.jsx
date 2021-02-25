import { ErrorMessage, Field } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
  const { name, placeholder, type, label } = props;

  return (
    <>
      <Field name={name}>
        {({ field }) => (
          <Form.Group controlId={`id_${name}`}>
            {label && <div>{label}</div>}
            <input {...field} type={type} placeholder={placeholder} />
            <ErrorMessage name={name} />
          </Form.Group>
        )}
      </Field>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  placeholder: '',
  type: null,
};

export default Input;

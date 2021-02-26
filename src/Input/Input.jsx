// import { classNames } from 'classnames';
import { ErrorMessage, Field } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';

const classNames = require('classnames/dedupe');

const Input = (props) => {
  const { name, placeholder, type, label, labelLeft, ...others } = props;

  const labelClassName = classNames(
    {
      'd-inline': labelLeft,
      'mr-2': labelLeft,
    }
  );

  return (
    <>
      <Field name={name}>
        {({ field }) => (
          <Form.Group controlId={`id_${name}`}>
            {label && <div className={labelClassName}>{label}</div>}
            <Form.Control
              {...field}
              {...others}
              type={type}
              placeholder={placeholder}
              className="col-6 d-inline"
            />
            <div className="d-inline ml-2">
              <ErrorMessage name={name} />
            </div>
          </Form.Group>
        )}
      </Field>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  labelLeft: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  labelLeft: false,
  placeholder: '',
  type: null,
};

export default Input;

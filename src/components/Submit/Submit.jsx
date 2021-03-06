import { useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const Submit = (props) => {
  const { children } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" disabled={isSubmitting}>{children}</Button>
  );
};

Submit.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Submit.defaultProps = {
  children: 'Submit',
};

export default Submit;

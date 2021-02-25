import { useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const Submit = (props) => {
  const { text } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" disabled={isSubmitting}>{text}</Button>
  );
};

Submit.propTypes = {
  text: PropTypes.string,
};

Submit.defaultProps = {
  text: 'Submit',
};

export default Submit;

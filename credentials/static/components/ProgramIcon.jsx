// TODO: We should be able to remove this as part of https://github.com/openedx/credentials/issues/1722
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

const ProgramIcon = (props) => {
  const {
    className, element, type, iconDict,
  } = props;
  const icon = iconDict[type.replace('-', '_')];

  if (!icon) {
    return null;
  }

  return React.createElement(element, {
    'aria-hidden': true,
    className,
    dangerouslySetInnerHTML: { __html: icon },
  });
};

ProgramIcon.propTypes = {
  className: PropTypes.string,
  element: PropTypes.string,
  type: PropTypes.string.isRequired,
  iconDict: PropTypes.shape().isRequired,
};

ProgramIcon.defaultProps = {
  className: '',
  element: 'span',
};

export default ProgramIcon;

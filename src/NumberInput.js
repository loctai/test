import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Intent,
} from '@blueprintjs/core';
import NumberFormat from 'react-number-format';
import _ from 'lodash';

function NumberInput(props) {
  const {
    onChange,
    value: initValue,
    label,
    placeholder,
  } = props;

  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const delayUpdate = useRef(_.debounce((val) => onChange(val), 200)).current;

  const inputComponent = (
    <NumberFormat
      style={{ fontSize: '0.875rem', height: 30 }}
      placeholder={placeholder}
      value={value}
      displayType={onChange ? 'input' : 'text'}
      thousandSeparator
      onValueChange={({ value: newValue }) => {
        setValue(newValue);
        if (onChange) delayUpdate(parseFloat(newValue));
      }}
    />
  );
  if (label) {
    return (
      <FormGroup
        inline
        label={label}
        intent={Intent.WARNING}
      >
        {inputComponent}
      </FormGroup>
    );
  }
  return inputComponent;
}

NumberInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

NumberInput.defaultProps = {
  value: null,
  label: '',
  onChange: undefined,
  placeholder: '',
};

export default NumberInput;

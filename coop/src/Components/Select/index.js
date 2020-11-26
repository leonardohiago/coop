/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

const customStyles = {
  container: () => ({
    marginTop: '8px',
    width: '320px',
    border: 'none'
  }),

  input: () => ({
    height: '36px',
    border: 'none'
  }),

  menu: (provided, state) => ({
    ...provided,
    width: '320px',
  }),
}

const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      styles={customStyles}
      // width='100px'
      // menuColor='red'
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};

export default Select;
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, memo } from 'react';
import { useField } from '@unform/core';
import ReactInputMask from 'react-input-mask';

const InputMask = ({ name,...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <ReactInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'input-erro' : ''}
        {...rest}
      />
    </>

  );
}

export default memo(InputMask);
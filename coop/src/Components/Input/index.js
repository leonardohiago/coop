/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, memo } from 'react';
import { useField } from '@unform/core';

const Input = ({ name,...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
  }, [fieldName, registerField]);

  return (
    <>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'input-erro' : ''}
        {...rest}
      />
      {/* { error && <MsgErroInput className="error">{error}</MsgErroInput> } */}
    </>

  );
}

export default memo(Input);
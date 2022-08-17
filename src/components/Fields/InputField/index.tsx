import React from 'react';
import { InputFieldPropsType } from './inputField.types';

const InputField = React.forwardRef<HTMLInputElement, InputFieldPropsType>(
  (props, ref) => {
    const { name, label, error, type, placeholder } = props;

    return (
      <div
        className="flex flex-col items-start justify-start w-full gap-2"
        role="form"
        aria-describedby={name}
      >
        <div className="flex flex-row items-center justify-start gap-2">
          <label htmlFor={name} className="font-medium text-zinc-900 ">
            {label}
          </label>
          {error && (
            <span className="text-sm text-red-600">{error.message}</span>
          )}
        </div>
        <input
          id={name}
          ref={ref}
          type={type || 'text'}
          className={`border rounded-md border-zinc-500
          ${type === 'checkbox' || type === 'color' ? '' : 'w-full p-2'}
          ${
            error
              ? 'border-b-4 border-b-red-700'
              : 'border-b-4 border-b-green-700'
          }`}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);
export default InputField;

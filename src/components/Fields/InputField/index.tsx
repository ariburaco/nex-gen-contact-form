import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  error?: FieldError;
}

const InputField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="flex flex-row items-center justify-start w-full gap-2 ">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-zinc-900 "
      >
        {props.label}
      </label>
      <input
        id={props.name}
        ref={ref}
        type="text"
        className={`w-full p-2 border rounded-md border-zinc-500 ${
          props.error ? ' border-b-4 border-b-red-700' : ''
        }`}
        placeholder="Enter Your Name"
        {...props}
      />
    </div>
  );
});
export default InputField;

import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
}

const CheckBoxField = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    return (
      <div className="flex flex-row items-center justify-start w-full gap-10">
        <div className="flex flex-row items-center justify-start gap-2">
          <label htmlFor={props.name} className="font-medium text-zinc-900 ">
            {props.label}
          </label>
          {props.error && (
            <span className="text-sm text-red-600">{props.error.message}</span>
          )}
        </div>
        <input
          id={props.name}
          ref={ref}
          type="checkbox"
          className={`p-2 border rounded-md border-zinc-500 ${
            props.error
              ? 'border-b-4 border-b-red-700'
              : 'border-b-4 border-b-green-700'
          }`}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    );
  }
);
export default CheckBoxField;

import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-2 ">
      <div className="flex flex-row items-center justify-start gap-2">
        <label htmlFor={props.name} className="font-medium text-zinc-900 ">
          {props.label}
        </label>
        {props.error && (
          <span className="text-sm text-red-600">{props.error.message}</span>
        )}
      </div>
      <textarea
        id={props.name}
        rows={props.rows || 1}
        cols={props.cols || 1}
        ref={ref}
        className={`w-full p-2 border rounded-md border-zinc-500 ${
          props.error
            ? 'border-b-4 border-b-red-700'
            : 'border-b-4 border-b-green-700'
        }`}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
});
export default TextArea;

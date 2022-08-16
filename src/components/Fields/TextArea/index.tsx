import React from 'react';
import { TextAreaPropsType } from './textArea.types';

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaPropsType>(
  (props, ref) => {
    const { name, label, error, placeholder, rows, cols } = props;

    return (
      <div className="flex flex-col items-start justify-start w-full gap-2 ">
        <div className="flex flex-row items-center justify-start gap-2">
          <label htmlFor={name} className="font-medium text-zinc-900 ">
            {label}
          </label>
          {error && (
            <span className="text-sm text-red-600">{error.message}</span>
          )}
        </div>
        <textarea
          id={name}
          rows={rows || 1}
          cols={cols || 1}
          ref={ref}
          className={`w-full p-2 border rounded-md border-zinc-500 ${
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
export default TextArea;

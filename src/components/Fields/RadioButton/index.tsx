import React from 'react';
import { RadioButtonPropsTypes } from './radioButton.types';

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonPropsTypes>(
  (props, ref) => {
    const { value, label, placeholder } = props;

    return (
      <div className="flex flex-row items-center justify-start w-full gap-2 p-2 m-2 rounded-md bg-slate-300 ">
        <input
          ref={ref}
          id={value?.toString()}
          type="radio"
          value={value}
          className="p-2 border rounded-md border-zinc-500"
          placeholder={placeholder}
          {...props}
        />
        <label
          htmlFor={value?.toString()}
          className="w-full font-medium transition-all select-none text-zinc-900 hover:opacity-70"
        >
          {label}
        </label>
      </div>
    );
  }
);
export default RadioButton;

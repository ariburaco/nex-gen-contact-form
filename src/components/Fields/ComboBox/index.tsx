import React from 'react';
import { FieldError } from 'react-hook-form';

export interface Selectable {
  id: number;
  name: string;
  value: string;
}

interface Props {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
  options: Selectable[];
}

const ComboBox = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  return (
    <div className="flex flex-row items-center justify-start w-full gap-2 p-2 m-2 ">
      <span className="font-medium text-zinc-900 ">{props.label}</span>
      <select
        ref={ref}
        {...props}
        className="flex-grow p-2 border rounded-lg bg-slate-300 border-zinc-500"
      >
        {props.options.map((option: Selectable) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
});
export default ComboBox;

import React from 'react';
import { Selectable } from 'types';
import { PropsType } from './comboBox.type';

const ComboBox = React.forwardRef<HTMLSelectElement, PropsType>(
  (props, ref) => {
    return (
      <div className="flex flex-col items-center justify-start w-full gap-2 p-2 m-2 md:flex-row ">
        <label htmlFor={props.name} className="font-medium text-zinc-900 ">
          {props.label}
        </label>
        <select
          id={props.name}
          ref={ref}
          {...props}
          className="flex-grow w-full p-2 border rounded-lg bg-slate-300 border-zinc-500"
        >
          {props.options.map((option: Selectable) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
export default ComboBox;

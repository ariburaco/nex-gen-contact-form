import React from 'react';
import { PropsType } from './colorPicker.types';

const ColorPicker = React.forwardRef<HTMLInputElement, PropsType>(
  (props, ref) => {
    return (
      <div className="flex flex-row items-center justify-start w-full gap-4">
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
          type="color"
          className="border rounded-md border-zinc-500"
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    );
  }
);
export default ColorPicker;

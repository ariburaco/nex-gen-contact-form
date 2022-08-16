import React from 'react';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
}

const RadioButton = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="flex flex-row items-center justify-start w-full gap-2 p-2 m-2 rounded-md bg-slate-300 ">
      <input
        ref={ref}
        type="radio"
        value={props.value}
        className="p-2 border rounded-md border-zinc-500"
        placeholder={props.placeholder}
        {...props}
      />
      <span className="font-medium text-zinc-900 ">{props.label}</span>
    </div>
  );
});
export default RadioButton;

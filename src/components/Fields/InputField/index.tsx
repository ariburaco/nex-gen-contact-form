import { FunctionComponent } from "react";

interface Props {
  name: string;
  label: string;
  value?: string;
}

const InputField: FunctionComponent<Props> = ({ name, label, value }) => {
  return (
    <div className="flex flex-row items-center justify-start w-full gap-2 ">
      <label htmlFor={name} className="block text-sm font-medium text-zinc-900">
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="w-full p-2 border rounded-md border-zinc-500"
        placeholder="Enter Your Name"
      />
    </div>
  );
};
export default InputField;

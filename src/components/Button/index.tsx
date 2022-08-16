import { FunctionComponent } from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({ children, onClick }) => {
  return (
    <>
      <button className="px-10 py-3 font-bold transition-all border bg-none border-zinc-900 text-zinc-900 rounded-xl hover:bg-[#eda402] hover:text-white active:scale-95">
        {children}
      </button>
    </>
  );
};
export default Button;

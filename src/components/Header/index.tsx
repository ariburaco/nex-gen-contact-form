import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-10">
      <img src="logo.png" alt="NexGen Logo" />
      <h1 className="text-2xl font-bold text-zinc-900">NexGen Contact Form</h1>
    </header>
  );
};
export default Header;

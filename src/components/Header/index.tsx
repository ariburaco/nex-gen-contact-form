import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-10">
      <img src="logo.png" alt="NexGen Logo" />
      <h1 className="text-2xl font-bold text-zinc-900">NexGen Contact Form</h1>
      <p className="text-sm text-zinc-600">
        This is a simple contact form built with React, TypeScript, TailwindCSS
        and React Hook Form. Made by Ali Burak Ozden
      </p>
    </header>
  );
};
export default Header;

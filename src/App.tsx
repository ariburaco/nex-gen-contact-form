const App = () => {
  return (
    <div className="container w-11/12 mx-auto p-10 h-screen bg-zinc-50">
      <div className="flex flex-col justify-center items-center gap-10">
        <header className="flex flex-col gap-10 justify-center items-center">
          <img src="logo.png" alt="NexGen Logo" />
          <h1 className="text-2xl font-bold text-zinc-900">
            NexGen Contact Form
          </h1>
        </header>

        <div className="flex flex-row justify-start items-center gap-2 w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-900"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-zinc-500 rounded-md p-2"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

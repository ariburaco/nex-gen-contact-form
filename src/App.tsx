import InputField from 'components/Fields/InputField';
import useNextForms from 'components/hooks/useNexForms';

function App() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useNextForms();

  return (
    <div className="container w-11/12 h-screen mx-auto mt-10 rounded-xl bg-zinc-50">
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <header className="flex flex-col items-center justify-center w-full h-32 gap-10 ">
          <img src="logo.png" alt="NexGen Logo" />
          <h1 className="text-2xl font-bold text-zinc-900">
            NexGen Contact Form
          </h1>
        </header>

        <div className="w-full h-full">
          <div className="p-10 bg-zinc-200 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <InputField
                label="Name"
                error={errors.example}
                {...register('example')}
              />
              {errors.example && <span>{errors.example.message}</span>}
              {/* include validation with required or other standard HTML validation rules */}
              <InputField label="Name" {...register('exampleRequired')} />

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && (
                <span>{errors.exampleRequired.message}</span>
              )}

              <input
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-3 font-bold transition-all border bg-none border-zinc-900 text-zinc-900 rounded-xl hover:bg-[#eda402] hover:text-white active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed"
              />
            </form>
            {/* <InputField label="Name" name="name" />

            <Button>Submit</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

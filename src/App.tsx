import CheckBoxField from 'components/Fields/CheckBox';
import ColorPicker from 'components/Fields/ColorPicker';
import ComboBox, { Selectable } from 'components/Fields/ComboBox';
import InputField from 'components/Fields/InputField';
import RadioButton from 'components/Fields/RadioButton';
import TextArea from 'components/Fields/TextArea';
import useNextForms from 'hooks/useNexForms';
import { Toaster } from 'react-hot-toast';

export type Inputs = {
  name: string;
  email: string;
  password: string;
  checkbox: boolean;
  textArea: string;
  color: string;
  date: string;
  localDate: string;
  file: FileList;
  number: number;
  radio: string;
  comboBox: Selectable;
};

const initialValues: Selectable[] = [
  { id: 1, name: 'Option 1', value: 'option1' },
  { id: 2, name: 'Option 2', value: 'option2' },
  { id: 3, name: 'Option 3', value: 'option3' },
  { id: 4, name: 'Option 4', value: 'option4' },
];

function App() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSubmitted,
    onSubmit,
    result,
    sentData,
  } = useNextForms();

  return (
    <div className="container w-11/12 mx-auto my-10 rounded-xl bg-zinc-50">
      <Toaster />
      <div className="flex flex-col items-center justify-center gap-10 p-2 shadow-xl md:p-6">
        <header className="flex flex-col items-center justify-center w-full gap-10">
          <img src="logo.png" alt="NexGen Logo" />
          <h1 className="text-2xl font-bold text-zinc-900">
            NexGen Contact Form
          </h1>
        </header>

        <div className="w-full h-full">
          <div className="p-4 md:p-10 bg-slate-200 rounded-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start justify-start gap-10 flex-cols"
            >
              <InputField
                label="Name"
                type="text"
                placeholder="Enter your name"
                error={errors.name}
                {...register('name')}
              />

              <InputField
                label="Email"
                type="email"
                placeholder="Enter your email"
                error={errors.email}
                {...register('email')}
              />

              <InputField
                label="Password"
                type="password"
                error={errors.password}
                {...register('password')}
              />

              <InputField
                label="Number"
                type="number"
                error={errors.number}
                {...register('number')}
              />

              <TextArea
                label="Your Message"
                rows={5}
                error={errors.textArea}
                {...register('textArea')}
              />

              <InputField
                label="Date"
                type="date"
                error={errors.date}
                {...register('date')}
              />

              <InputField
                label="Local Date"
                type="datetime-local"
                error={errors.localDate}
                {...register('localDate')}
              />

              <InputField
                label="Select a File"
                type="file"
                error={errors.file}
                {...register('file')}
              />

              <div className="flex flex-col items-center justify-center w-full gap-10 md:justify-between md:flex-row">
                <CheckBoxField
                  label="Did you like this form?"
                  error={errors.checkbox}
                  {...register('checkbox')}
                />
                <ColorPicker
                  label="Pick a color"
                  error={errors.color}
                  {...register('color')}
                />
              </div>

              <div className="flex flex-col items-start justify-start w-full gap-4 p-4 rounded-lg md:p-10 bg-zinc-50">
                <div className="flex flex-row items-center justify-start gap-2">
                  <h1 className="font-medium text-zinc-900 ">
                    Select a number
                  </h1>
                  {errors.radio && (
                    <span className="text-sm text-red-600">
                      {errors.radio.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center justify-between w-full md:flex-row">
                  <RadioButton
                    value="1"
                    label="Number 1"
                    {...register('radio')}
                  />
                  <RadioButton
                    value="2"
                    label="Number 2"
                    {...register('radio')}
                  />
                  <RadioButton
                    value="3"
                    label="Number 3"
                    {...register('radio')}
                  />
                  <RadioButton
                    value="4"
                    label="Number 4"
                    {...register('radio')}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full gap-4 p-4 rounded-lg md:p-10 bg-zinc-50">
                <div className="flex flex-row items-center justify-start gap-2">
                  <h1 className="font-medium text-zinc-900 ">
                    Select options that you like
                  </h1>
                  {errors.comboBox && (
                    <span className="text-sm text-red-600">
                      {errors.comboBox.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center justify-between w-full md:flex-row">
                  <ComboBox
                    label="Options"
                    options={initialValues}
                    {...register('comboBox')}
                  />
                </div>
              </div>

              <input
                type="submit"
                value={isSubmitting ? 'Submitting...' : 'Submit'}
                disabled={isSubmitting}
                className="w-full text-md md:text-xl px-10 py-3 font-bold transition-all border bg-none border-zinc-900 text-zinc-900 rounded-xl hover:bg-[#eda402] hover:text-white active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed"
              />
            </form>
            {isSubmitted && result && (
              <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-2 mt-10 md:p-10 bg-zinc-50 rounded-xl">
                <h1 className="text-2xl font-bold text-center text-green-600">
                  Form submitted successfully
                </h1>
                <div className="flex flex-col justify-center w-full gap-20 overflow-hidden md:flex-row">
                  <div className="flex flex-col gap-6 p-6 rounded-md bg-slate-200">
                    <h2 className="text-xl font-bold">Form Values</h2>
                    <pre
                      style={{
                        whiteSpace: 'pre-wrap',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {JSON.stringify(sentData, null, 2)}
                    </pre>
                  </div>
                  <div className="flex flex-col gap-6 p-6 rounded-md bg-slate-200">
                    <h2 className="text-xl font-bold">Response</h2>
                    <pre
                      style={{
                        whiteSpace: 'pre-wrap',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {JSON.stringify(result, null, 2)}
                    </pre>{' '}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

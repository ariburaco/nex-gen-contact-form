import Feedback from 'components/Feedback';
import CheckBoxField from 'components/Fields/CheckBox';
import ColorPicker from 'components/Fields/ColorPicker';
import ComboBox from 'components/Fields/ComboBox';
import InputField from 'components/Fields/InputField';
import RadioButton from 'components/Fields/RadioButton';
import TextArea from 'components/Fields/TextArea';
import Header from 'components/Header';
import useNextForms from 'hooks/useNexForms';
import { Toaster } from 'react-hot-toast';
import initialValues from 'utils/initialValues';

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
        <Header />

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
                label="Phone"
                type="tel"
                placeholder="Enter your 10 Digit Phone Number"
                error={errors.tel}
                {...register('tel')}
              />

              <InputField
                label="Password"
                type="password"
                error={errors.password}
                {...register('password')}
              />

              <InputField
                label="Enter a Number"
                type="number"
                error={errors.number}
                {...register('number')}
              />

              <TextArea
                label="Your Message to Us"
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
                label="Date with Time"
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
                  label="Pick a color!"
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
            <Feedback
              isSubmitted={isSubmitted}
              result={result}
              sentData={sentData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

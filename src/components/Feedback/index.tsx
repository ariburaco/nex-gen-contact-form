import { FunctionComponent } from 'react';
import { FeedbackProps } from './feedback.types';

const Feedback: FunctionComponent<FeedbackProps> = ({
  isSubmitted,
  result,
  sentData,
}) => {
  return (
    isSubmitted &&
    result && (
      <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-2 mt-10 md:p-10 bg-zinc-50 rounded-xl">
        <h1 className="text-2xl font-bold text-center text-green-600">
          Form submitted successfully
        </h1>
        <div className="flex flex-col justify-center w-full gap-20 overflow-hidden md:flex-row">
          <div className="flex flex-col gap-6 p-6 rounded-md bg-slate-200">
            <h2 className="text-xl font-bold">Form Values that Sent</h2>
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
            <h2 className="text-xl font-bold">Response from Server</h2>
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
    )
  );
};
export default Feedback;

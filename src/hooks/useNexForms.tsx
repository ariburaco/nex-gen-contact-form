import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Inputs } from 'types';
import API_URL from 'utils/apiHelper';
import { SUBMIT_ERROR, SUBMIT_SUCCESS } from 'utils/messages';
import validationSchema from 'utils/validationSchema';

const useNextForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm<Inputs>({
    mode: 'onBlur', // when to validate the input
    resolver: yupResolver(validationSchema), // validation schema to use
  });

  const [result, setResult] = useState<Inputs | null>(null); // to store the result of the form submission
  const [sentData, setSentData] = useState<Inputs | null>(null); // to store the data sent to the server

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSentData(data);

    const toaster = toast.loading('Submitting Form...'); // show a loading toaster

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      }); // send the data to the server

      const responseResult = await response.json(); // get the response from the server
      setResult(responseResult);
      if (response.status === 200) {
        // if the response is successful
        toast.success(SUBMIT_SUCCESS, {
          id: toaster,
        });
      } else {
        toast.error(SUBMIT_ERROR, {
          id: toaster,
        });
      }
    } catch (error) {
      toast.error(SUBMIT_ERROR, {
        id: toaster,
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSubmitted,
    onSubmit,
    isValid,
    result,
    sentData,
  };
};

export default useNextForms;

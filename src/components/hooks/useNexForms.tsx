import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from 'App';
import { SubmitHandler, useForm } from 'react-hook-form';
import API_URL from 'utils/apiHelper';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required Field').max(100, 'Max 100 characters'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Required Field')
    .max(100, 'Max 100 characters'),
  password: Yup.string()
    .required('Required Field')
    .max(100, 'Max 100 characters'),
  number: Yup.number().required('Required Field'),
  textArea: Yup.string()
    .required('Required Field')
    .max(1000, 'Max 1000 characters'),
  checkbox: Yup.boolean().oneOf([true, false], 'Required Field'),
  color: Yup.string().required('Required Field'),
  date: Yup.string().required('Required Field'),
  localDate: Yup.string().required('Required Field'),
  file: Yup.mixed()
    .test('fileSize', 'Please Select a File', (value) => {
      if (!value.length) return false;
      return true;
    })
    .required('Required Field'),
  radio: Yup.mixed().required('Required Field'),
  comboBox: Yup.mixed().required('Required Field'),
});

const useNextForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const [result, setResult] = useState<any>(null);
  const [sentData, setSentData] = useState<any>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSentData(data);

    const toaster = toast.loading('Submitting Form...');
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const responseResult = await response.json();
    setResult(responseResult);
    if (response.status === 200) {
      toast.success('Form Submitted Successfully', {
        id: toaster,
      });
    } else {
      toast.error('Form Submission Failed', {
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

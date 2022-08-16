import { yupResolver } from '@hookform/resolvers/yup';
import { Inputs } from 'App';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required Field'),
  email: Yup.string().email('Invalid Email Format').required('Required Field'),
  password: Yup.string().required('Required Field'),
  number: Yup.number().required('Required Field'),
  chekbox: Yup.boolean().oneOf([true, false], 'Required Field'),
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
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    return new Promise((resolve) => {
      console.log(data);

      setTimeout(() => {
        resolve('ok');
      }, 2000);
    });
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
    isValid,
  };
};

export default useNextForms;

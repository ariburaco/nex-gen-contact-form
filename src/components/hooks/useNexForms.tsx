import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const initialValues: Inputs = {
  example: 'ex',
  exampleRequired: '',
};

const validationSchema = Yup.object().shape({
  example: Yup.string().email().required('Required'),
  exampleRequired: Yup.string().required('Required'),
});

const useNextForms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: initialValues,
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

  return { register, handleSubmit, watch, errors, isSubmitting, onSubmit };
};

export default useNextForms;

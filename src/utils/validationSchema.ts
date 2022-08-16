import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required Field').max(100, 'Max 100 characters'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Required Field')
    .max(100, 'Max 100 characters'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
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

export default validationSchema;

import * as Yup from 'yup';

// Validation Regex Pattern for a Phone Number
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Validation Schema for the Form
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required Field').max(100, 'Max 100 characters'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Required Field')
    .max(100, 'Max 100 characters'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid') // Regex Pattern match
    .min(10, 'Please Enter a 10 Digit Phone Number')
    .max(10, 'Please Enter a 10 Digit Phone Number'),
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
      if (!value.length) return false; // if no file selected
      return true;
    })
    .required('Required Field'),
  radio: Yup.mixed().required('Required Field'),
  comboBox: Yup.mixed().required('Required Field'),
});

export default validationSchema;

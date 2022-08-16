import { FieldError } from 'react-hook-form';

export interface InputFieldPropsType {
  name: string;
  label: string;
  error?: FieldError;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'file'
    | 'localDate'
    | 'color'
    | 'checkbox'
    | 'number'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local';
  placeholder?: string;
}

import { FieldError } from 'react-hook-form';

export interface PropsType {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
}

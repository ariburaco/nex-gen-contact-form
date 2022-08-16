import { FieldError } from 'react-hook-form';

export interface TextAreaPropsType {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

import { FieldError } from 'react-hook-form';
import { Selectable } from 'types';

export interface PropsType {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
  options: Selectable[];
}

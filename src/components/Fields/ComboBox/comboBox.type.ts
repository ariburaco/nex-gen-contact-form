import { FieldError } from 'react-hook-form';
import { Selectable } from 'types';

export interface ComboBoxPropsType {
  name: string;
  label: string;
  error?: FieldError;
  placeholder?: string;
  options: Selectable[];
}

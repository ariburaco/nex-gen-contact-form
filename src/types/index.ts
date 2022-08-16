export type Inputs = {
  name: string;
  email: string;
  tel: string;
  password: string;
  checkbox: boolean;
  textArea: string;
  color: string;
  date: string;
  localDate: string;
  file: FileList;
  number: number;
  radio: string;
  comboBox: Selectable;
};

export interface Selectable {
  id: number;
  name: string;
  value: string;
}

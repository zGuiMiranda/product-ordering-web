import { inputTypes, labelTypes } from "./consts";
import { InputListProp, LabelProps, InputProps } from "./interfaces";

export type ExtendedInputProps = InputListProp &
  (LabelProps | Partial<InputProps>);
export type InputType = (typeof inputTypes)[number];
export type LabelType = (typeof labelTypes)[number];

export type ComponentTypes = InputType | LabelType;
export type Params = {
  params: { locale: string };
};

export type Supplier = {
  id: string;
  name: string;
};

export type PageProps = { params: { locale: string } };

export type MessageType = {
  [key: string]: any;
} | null;

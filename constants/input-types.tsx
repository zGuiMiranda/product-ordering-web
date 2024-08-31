import { Label } from "@/app/components/atoms/label";
import { InputProps, LabelProps } from "./interfaces";
import { InputText } from "@/atoms/input-text";

export const inputComponents = {
  label: (props: LabelProps) => (
    <Label targetInput={props.targetInput}>{props.children}</Label>
  ),
  "input-text": (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
  number: (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      id={props.id}
    />
  ),
  select: (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
  "input-date": (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
  "text-area": (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
  radio: (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
  checkbox: (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
  default: (props: InputProps) => (
    <InputText
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  ),
};

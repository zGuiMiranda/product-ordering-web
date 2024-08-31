import { Input as ShadInput } from "@/components/ui/input";
import { InputProps } from "../../../../constants/interfaces";

export const InputText = ({ placeholder, id, onChange }: InputProps) => {
  return <ShadInput onChange={onChange} id={id} placeholder={placeholder} />;
};

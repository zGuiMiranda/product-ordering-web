import { Label as ShadLabel } from "@/components/ui/label";
import { IChildren, LabelProps } from "../../../../constants/interfaces";

export const Label = ({ targetInput, children }: LabelProps & IChildren) => {
  return <ShadLabel htmlFor={targetInput}>{children}</ShadLabel>;
};

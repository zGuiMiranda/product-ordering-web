import { IChildren } from "../../../../constants/interfaces";
import { Button as ShadButton } from "@/components/ui/button";

export const Button = <T,>({
  children,
  form,
  variant,
}: IChildren & {
  onClick?: (data: T) => void;
  form: string;
  variant?: "link" | "destructive" | "secondary" | "ghost" | "default";
}) => {
  return (
    <ShadButton form={form} variant={variant}>
      {children}
    </ShadButton>
  );
};

import { IChildren } from "../../../../constants/interfaces";
import { Button as ShadButton } from "@/components/ui/button";

export const Button = <T,>({
  children,
  form,
}: IChildren & { onClick?: (data: T) => void; form: string }) => {
  return <ShadButton form={form}>{children}</ShadButton>;
};

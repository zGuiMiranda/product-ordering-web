import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { IChildren } from "../../../../constants/interfaces";
import { Button as ShadButton } from "@/components/ui/button";

type IconButtonProps = {
  icon: "trash" | "edit";
  onClick?: <T>(data: T) => void;
  form?: string;
  buttonVariant?: "link" | "destructive" | "secondary" | "default";
  iconColor?: "red" | "orange" | "green" | "black";
};

const icons = {
  trash: (iconColor: string) => <TrashIcon color={iconColor} />,
  edit: (iconColor: string) => <Pencil1Icon color={iconColor} />,
};

export const IconButton = ({
  form,
  icon,
  onClick,
  buttonVariant = "default",
  iconColor = "black",
}: IChildren & IconButtonProps) => {
  return (
    <ShadButton form={form} onClick={onClick} variant={buttonVariant}>
      {icons[icon](iconColor)}
    </ShadButton>
  );
};

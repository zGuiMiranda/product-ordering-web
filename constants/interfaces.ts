import { ReactElement, ReactNode } from "react";
import { ComponentTypes, ExtendedInputProps } from "./types";

interface SubMenu extends CommonProps {
  href: string;
}

export interface Menu {
  title: string;
  subMenus: SubMenu[];
}

export interface NavBarProps {
  menus: Menu[];
}

export interface CommonProps {
  title: string;
  description: string;
}

export interface IChildren {
  children?: ReactNode;
}

export interface CardProps extends IChildren, CommonProps {
  footer: ReactElement;
  footerFloatRight?: boolean;
}

export interface InputProps {
  placeholder: string;
  name: string;
  id: string;
  value?: string | number | boolean | Date;
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps extends IChildren {
  targetInput: string;
}

export interface InputListProp {
  type: ComponentTypes;
}

export interface InputRendererProps {
  inputList: ExtendedInputProps[];
}

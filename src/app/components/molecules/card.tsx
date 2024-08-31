import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadCard,
} from "@/components/ui/card";
import { CardProps } from "../../../../constants/interfaces";

const Card = ({
  title,
  description,
  footer,
  children,
  footerFloatRight = true,
}: CardProps) => {
  return (
    <ShadCard>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter
        style={
          footerFloatRight
            ? { display: "flex", justifyContent: "flex-end" }
            : {}
        }
      >
        {footer}
      </CardFooter>
    </ShadCard>
  );
};

export default Card;

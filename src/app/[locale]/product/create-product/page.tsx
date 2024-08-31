import { Button } from "@/app/components/atoms/button";
import Card from "@/app/components/molecules/card";
import InputRenderer from "@/app/components/organisms/input-renderer";
import { ExtendedInputProps, Params } from "@/constants/types";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
export const dynamic = "force-dynamic";
const ProductCreation = () => {
  const productMessages = useTranslations("Product");
  const actionMessages = useTranslations("Actions");

  const inputList: ExtendedInputProps[] = useMemo(
    () => [
      {
        type: "label",
        children: productMessages("productName"),
        targetInput: productMessages("productName"),
      },
      {
        type: "input-text",
        name: productMessages("productName"),
        id: productMessages("productName"),
        placeholder: productMessages("productName"),
      },
    ],
    [productMessages]
  );

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      {/* <Card
        title={productMessages("registerProduct")}
        description={productMessages("registerProductDescription")}
        footer={<Button form="create-product">{actionMessages("save")}</Button>}
      >
        <InputRenderer inputList={inputList}></InputRenderer>
      </Card> */}
    </div>
  );
};

export default ProductCreation;

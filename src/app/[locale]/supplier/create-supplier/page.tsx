import { ExtendedInputProps, PageProps, Supplier } from "@/constants/types";
import CreateSupplierForm from "./create-supplier-form";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const SupplierCreation = () => {
  const supplierMessages = useTranslations("Supplier");
  const actionMessages = useTranslations("Actions");
  const genericMessages = useTranslations("Generic");
  const inputList: ExtendedInputProps[] = useMemo(
    () => [
      {
        type: "label",
        children: supplierMessages("supplierName"),
        targetInput: 'productMessages("supplierName")',
      },
      {
        type: "input-text",
        name: genericMessages("name"),
        id: supplierMessages("supplierName"),
        placeholder: supplierMessages("supplierName"),
      },
    ],
    [genericMessages, supplierMessages]
  );

  return (
    <CreateSupplierForm
      title={supplierMessages("registerSupplier")}
      description={supplierMessages("registerSupplierDescription")}
      inputs={inputList}
      buttonLabel={actionMessages("save")}
    />
  );
};

export default SupplierCreation;

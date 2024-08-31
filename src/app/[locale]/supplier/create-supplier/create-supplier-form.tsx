"use client";
import { Button } from "@/app/components/atoms/button";
import Card from "@/app/components/molecules/card";
import { FormHandler } from "@/app/components/organisms/form-handler";
import InputRenderer from "@/app/components/organisms/input-renderer";
import { ExtendedInputProps, Supplier } from "@/constants/types";
import useMutateEntityHook from "@/hooks/mutateEntityHook";
import { createSupplier } from "@/services/supplier";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";
const CreateSupplierForm = ({
  title,
  description,
  buttonLabel,
  inputs,
}: {
  title: string;
  buttonLabel: string;
  description: string;
  inputs: ExtendedInputProps[];
}) => {
  const { mutate, isPending, isSuccess, isError } =
    useMutateEntityHook(createSupplier);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const saveSupplier = (supplier: Supplier) => {
    mutate(supplier);
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card
        title={title}
        description={description}
        footer={<Button form="createSupplier">{buttonLabel}</Button>}
      >
        <FormHandler id="createSupplier" onSubmit={saveSupplier}>
          <InputRenderer inputList={inputs} />
        </FormHandler>
      </Card>
    </div>
  );
};

export default CreateSupplierForm;

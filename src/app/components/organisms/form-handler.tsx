"use client";
import React, { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const FormHandler: React.FC<{
  children: ReactElement;
  onSubmit?: (data: any) => void;
  id: string;
}> = ({ children, onSubmit, id }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          return onSubmit ? methods.handleSubmit(onSubmit)(e) : null;
        }}
        id={id}
      >
        {React.Children.map(children, (child: any) => {
          return (
            child?.$$typeof &&
            React.createElement(child.type, {
              ...{
                ...child?.props,
                //  register: methods.register,
                errors: methods.formState.errors,
                control: methods.control,
                // setValue: methods.setValue,
                // getValues: methods.getValues,
                // watch: methods.watch,
                // methods: methods,
                // reset: methods.reset,
                // resetField: methods.resetField,
                // formState: methods.formState,
              },
            })
          );
        })}
      </form>
    </FormProvider>
  );
};

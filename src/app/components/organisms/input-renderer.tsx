"use client";
import { inputTypes, labelTypes } from "@/constants/consts";
import { inputComponents } from "@/constants/input-types";
import {
  InputListProp,
  InputProps,
  InputRendererProps,
  LabelProps,
} from "@/constants/interfaces";
import { ExtendedInputProps, InputType, LabelType } from "@/constants/types";
import { FC, useCallback, useMemo } from "react";
import { Control, Controller } from "react-hook-form";

const isItLabel = (
  input: InputListProp
): input is InputListProp & LabelProps => {
  return labelTypes.includes(input.type as LabelType);
};

const isItInput = (
  input: InputListProp
): input is InputListProp & InputProps => {
  return inputTypes.includes(input.type as InputType);
};

const InputRenderer = ({
  inputList,
  control,
}: InputRendererProps & { control?: Control }) => {
  const inputs = useMemo(() => inputComponents, []);
  const componentMap = useMemo(() => new Map(Object.entries(inputs)), [inputs]);

  const getRightInput = useCallback(
    (input: ExtendedInputProps, index: number) => {
      let Component: any;
      const isLabel = isItLabel(input);

      if (isLabel) {
        const { targetInput, children } = input;
        Component = (componentMap.get(input.type) ||
          componentMap.get("default")) as FC<LabelProps>;
        return (
          <Component key={index} targetInput={targetInput}>
            {children}
          </Component>
        );
      }

      const isInput = isItInput(input);
      if (isInput) {
        const { name, placeholder, id, value } = input;

        Component = (componentMap.get(input.type) ||
          componentMap.get("default")) as FC<InputProps>;
        return (
          <Controller
            key={index}
            name={input.name}
            control={control}
            render={({ field: { ref, onChange, ...restField } }) => (
              <Component
                {...restField}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                id={id}
                key={index}
                value={value}
              />
            )}
          />
        );
      }
    },

    [componentMap, control]
  );
  return inputList?.map((input, index) => (
    <div key={index} className="pt-1">
      {getRightInput(input, index)}
    </div>
  ));
};

export default InputRenderer;

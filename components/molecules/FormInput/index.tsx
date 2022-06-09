import { FormikProps, FormikValues } from "formik";
import React, { useState } from "react";
import { HideEye, ShowEye } from "../../../public/assets/SvgIcons";
import {
  FormInputWrapper,
  FormLabel,
  PasswordInputWrapper,
  PasswordShowButton,
  SignInput,
  ValidityGuidelines,
} from "./styles";

interface FormInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  formik: FormikProps<FormikValues>;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  variant?: "password" | undefined;
}

const index: React.FC<FormInputProps> = (props) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleShowPassword: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsPasswordShow(!isPasswordShow);
  };

  return props.variant === "password" ? (
    <FormInputWrapper>
      <FormLabel>{props.label}</FormLabel>
      <PasswordInputWrapper>
        <SignInput
          isError={props.formik.getFieldMeta(props.name).error}
          type={isPasswordShow ? "text" : "password"}
          required
          name={props.name}
          {...props.formik.getFieldProps(props.name)}
          autoComplete="on"
        />

        <PasswordShowButton onClick={handleShowPassword}>
          {isPasswordShow ? <HideEye /> : <ShowEye />}
        </PasswordShowButton>
      </PasswordInputWrapper>

      <ValidityGuidelines isError={props.formik.getFieldMeta(props.name).error}>
        6-20자 이내의 대문자, 소문자, 숫자, 특수문자가 각 1개 이상 포함된 비밀번호를 만들어 주세요.
      </ValidityGuidelines>
    </FormInputWrapper>
  ) : (
    <FormInputWrapper>
      <FormLabel>{props.label}</FormLabel>
      <SignInput
        isError={props.formik.getFieldMeta(props.name).error}
        required={props.required}
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        {...props.formik.getFieldProps(props.name)}
        autoComplete="on"
      />

      <ValidityGuidelines isError>{props.formik.getFieldMeta(props.name).error}</ValidityGuidelines>
    </FormInputWrapper>
  );
};

export default index;

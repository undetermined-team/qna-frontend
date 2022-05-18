import { FormikProps, FormikValues } from "formik";
import React from "react";
import styled from "styled-components";

const TermsCheckContents = styled.span`
  ${(props) => props.theme.typography.Footnote};
  color: ${(props) => props.theme.palette.Gray800};
`;

const TermsCheckCheckBox = styled.input`
  width: 18px;
  height: 18px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  border-radius: 4px;
`;

const TermsCheckWrapper = styled.div`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

interface TermsCheckProps {
  name: string;
  formik: FormikProps<FormikValues>;
  required?: boolean;
  contents: string;
}

const index: React.FC<TermsCheckProps> = (props) => {
  return (
    <TermsCheckWrapper>
      <TermsCheckCheckBox
        type="checkbox"
        required={props.required}
        name={props.name}
        {...props.formik.getFieldProps(props.name)}
      />
      <TermsCheckContents>{props.contents}</TermsCheckContents>
    </TermsCheckWrapper>
  );
};

export default index;

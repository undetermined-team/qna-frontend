import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignSubmit from "../components/molecules/SignSubmit";
import FormInput from "../components/molecules/FormInput";

const ConsentContents = styled.span`
  ${(props) => props.theme.typography.Footnote};
  color: ${(props) => props.theme.palette.Gray800};
`;

const ConsentCheckBox = styled.input`
  width: 18px;
  height: 18px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
  border-radius: 4px;
`;

const ConsentWrapper = styled.div`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const SignContainer = styled.div`
  margin-top: 65px;
`;

const SignHeading = styled.h2`
  ${(props) => props.theme.typography.Heading1};
  margin-bottom: 41px;
  text-align: center;
`;

const FormInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      usingAgreements: false,
      marketingAgreements: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, "1~32자 사이로 입력해 주세요.")
        .max(32, "1~32자 사이로 입력해 주세요."),
      email: Yup.string()
        .email("이메일 형식으로 입력해야 합니다.")
        .min(1, "1~32자 사이로 입력해 주세요.")
        .max(32, "1~32자 사이로 입력해 주세요."),
      password: Yup.string()
        .min(6)
        .max(20)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/, {
          excludeEmptyString: true,
        }),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "비밀번호와 일치하지않습니다."
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <SignContainer>
      <SignHeading>계정 만들기</SignHeading>

      <form onSubmit={formik.handleSubmit}>
        <FormInput label="이름" name="name" formik={formik} placeholder="김엘리자베스" required />

        <FormInput
          label="이메일"
          type="email"
          name="email"
          formik={formik}
          placeholder="name@address.com"
          required
        />

        <FormInput
          label="비밀번호"
          name="password"
          type="password"
          formik={formik}
          required
          variant="password"
        />

        <FormInput
          label="비밀번호 확인"
          type="password"
          name="confirmPassword"
          formik={formik}
          required
        />

        <FormInputWrapper>
          <ConsentWrapper>
            <ConsentCheckBox
              type="checkbox"
              required
              name="usingAgreements"
              {...formik.getFieldProps("usingAgreements")}
            />
            <ConsentContents>이용약관 및 개인정보 처리방침에 동의합니다.</ConsentContents>
          </ConsentWrapper>

          <ConsentWrapper>
            <ConsentCheckBox
              type="checkbox"
              name="marketingAgreements"
              {...formik.getFieldProps("marketingAgreements")}
            />
            <ConsentContents>마케팅 활용 동의 및 광고 수신에 동의합니다. (선택)</ConsentContents>
          </ConsentWrapper>
        </FormInputWrapper>

        <SignSubmit currentPageName="SignUp" />
      </form>
    </SignContainer>
  );
};

export default SignUp;

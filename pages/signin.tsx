import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignSubmit from "../components/molecules/SignSubmit";
import FormInput from "../components/molecules/FormInput";

const SignContainer = styled.div`
  margin-top: 65px;
`;

const SignHeading = styled.h2`
  ${(props) => props.theme.typography.Heading1};
  margin-bottom: 41px;
  text-align: center;
`;

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <SignContainer>
      <SignHeading>로그인</SignHeading>

      <form onSubmit={formik.handleSubmit}>
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

        <SignSubmit currentPageName="SignIn" />
      </form>
    </SignContainer>
  );
};

export default SignIn;

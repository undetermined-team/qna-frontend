import React from "react";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import Link from "next/link";
import { GithubIcon } from "../public/assets/SvgIcons";
import { useFormik } from "formik";

const SignUpInput = styled(Input)`
  ${(props) => props.theme.typography.Body};
  width: 310px;
  height: 38px;
  padding: 10px;
  border-radius: 4px;

  & :hover {
    border: 1px solid ${(props) => props.theme.palette.GreenA400};
  }

  & :active {
    border: 1px solid ${(props) => props.theme.palette.GreenA400};
    box-shadow: 0px 0px 0px 3px rgba(0, 230, 118, 0.25);
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.palette.GreenA400};
  }
`;

const FormLabel = styled.p`
  ${(props) => props.theme.typography.Footnote};
  color: #000000;
`;

const SignUpButton = styled(Button)`
  ${(props) => props.theme.typography.Body};
  line-height: normal;
  width: 310px;
  height: 38px;
  background-color: ${(props) => props.theme.palette.LightBlueA700};
  border: ${(props) => props.theme.palette.LightBlueA700};
  border-radius: 2px;
  margin-bottom: 16px;
`;

const GithubSignUpButton = styled(Button)`
  ${(props) => props.theme.typography.Body};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 38px;
  background-color: ${(props) => props.theme.palette.Gray900};
  border-color: ${(props) => props.theme.palette.Gray900};
  border-radius: 2px;
  margin: 16px 0;

  svg {
    margin-right: 19px;
  }
`;

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

const SignUpContainer = styled.div`
  margin-top: 113px;
`;

const SignUpHeading = styled.h2`
  ${(props) => props.theme.typography.Heading1};
  margin-bottom: 41px;
  text-align: center;
`;

const FormInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const SignUpButtonContainer = styled.div`
  text-align: center;
`;

const ValidityGuidelines = styled.p`
  ${(props) => props.theme.typography.Body3};
  color: ${(props) => props.theme.palette.Gray600};
  width: 305px;
  margin-top: 7px;
`;

const GoSignIn = styled.a`
  ${(props) => props.theme.typography.Body};
  color: ${(props) => props.theme.palette.LightBlueA700};
  cursor: pointer;
  margin-top: 33px;
`;

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      usingAgreements: false,
      marketingAgreements: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onGithubClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return (
    <SignUpContainer>
      <SignUpHeading>계정 만들기</SignUpHeading>

      <form onSubmit={formik.handleSubmit}>
        <FormInputWrapper>
          <FormLabel>이름</FormLabel>
          <SignUpInput
            required
            placeholder="김엘리자베스"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormInputWrapper>

        <FormInputWrapper>
          <FormLabel>이메일</FormLabel>
          <SignUpInput
            type="email"
            placeholder="name@address.com"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormInputWrapper>

        <FormInputWrapper>
          <FormLabel>비밀번호</FormLabel>
          <SignUpInput
            type="password"
            required
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <ValidityGuidelines>
            6-20자 이내의 대문자, 소문자, 숫자, 특수문자가 각 1개 이상 포함된 비밀번호를 만들어
            주세요.
          </ValidityGuidelines>
        </FormInputWrapper>

        <FormInputWrapper>
          <FormLabel>비밀번호 확인</FormLabel>
          <SignUpInput
            type="password"
            required
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </FormInputWrapper>

        <FormInputWrapper>
          <ConsentWrapper>
            <ConsentCheckBox
              type="checkbox"
              required
              name="usingAgreements"
              onChange={formik.handleChange}
              checked={formik.values.usingAgreements}
            />
            <ConsentContents>이용약관 및 개인정보 처리방침에 동의합니다.</ConsentContents>
          </ConsentWrapper>

          <ConsentWrapper>
            <ConsentCheckBox
              type="checkbox"
              name="marketingAgreements"
              onChange={formik.handleChange}
              checked={formik.values.marketingAgreements}
            />
            <ConsentContents>마케팅 활용 동의 및 광고 수신에 동의합니다. (선택)</ConsentContents>
          </ConsentWrapper>
        </FormInputWrapper>

        <SignUpButtonContainer>
          <SignUpButton type="submit">가입하기</SignUpButton>

          <p>또는</p>

          <GithubSignUpButton onClick={onGithubClick}>
            {GithubIcon}
            <span>GitHub 계정으로 가입하기</span>
          </GithubSignUpButton>

          <Link href="/login">
            <GoSignIn>이미 계정이 있으신가요?</GoSignIn>
          </Link>
        </SignUpButtonContainer>
      </form>
    </SignUpContainer>
  );
};

export default Signup;

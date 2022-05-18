import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import Link from "next/link";
import { GithubIcon, HideEye, ShowEye } from "../public/assets/SvgIcons";
import { useFormik } from "formik";
import * as Yup from "yup";
import IconButton from "../components/atoms/IconButton";

interface SignInputProps {
  isError?: boolean | string | number;
}

interface ValidityGuidelinesProps {
  isError?: boolean | string | number;
}

const SignInput = styled(Input)<SignInputProps>`
  border-color: ${(props) => props.isError && props.theme.palette.RedA400};
  box-shadow: ${(props) => props.isError && "0px 0px 0px 3px rgba(255, 138, 128, 0.25);"};
  ${(props) => props.theme.typography.Body};
  width: 310px;
  height: 38px;
  padding: 10px;
  border-radius: 4px;

  & :hover {
    border: 1px solid
      ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.GreenA400)};
  }

  & :active {
    border: 1px solid
      ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.GreenA400)};
    box-shadow: 0px 0px 0px 3px rgba(0, 230, 118, 0.25);
  }

  &:focus {
    border: 1px solid
      ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.GreenA400)};
  }
`;

const FormLabel = styled.p`
  ${(props) => props.theme.typography.Footnote};
  color: #000000;
`;

const SignButton = styled(Button)`
  ${(props) => props.theme.typography.Body};
  line-height: normal;
  width: 310px;
  height: 38px;
  background-color: ${(props) => props.theme.palette.LightBlueA700};
  border: ${(props) => props.theme.palette.LightBlueA700};
  border-radius: 2px;
  margin-bottom: 16px;
`;

const GithubSignButton = styled(Button)`
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

const SignButtonContainer = styled.div`
  text-align: center;
`;

const ValidityGuidelines = styled.p<ValidityGuidelinesProps>`
  ${(props) => props.theme.typography.Body3};
  color: ${(props) => (props.isError ? props.theme.palette.RedA400 : props.theme.palette.Gray600)};
  width: 305px;
  margin-top: 7px;
`;

const GoSignIn = styled.a`
  ${(props) => props.theme.typography.Body};
  color: ${(props) => props.theme.palette.LightBlueA700};
  cursor: pointer;
  margin-top: 33px;
`;

const PasswordShowButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  top: 7px;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const Sign = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

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

  const onGithubClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  const handleShowPassword: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsPasswordShow(!isPasswordShow);
  };

  return (
    <SignContainer>
      <SignHeading>계정 만들기</SignHeading>

      <form onSubmit={formik.handleSubmit}>
        <FormInputWrapper>
          <FormLabel>이름</FormLabel>
          <SignInput
            isError={formik.getFieldMeta("name").error}
            required
            placeholder="김엘리자베스"
            name="name"
            {...formik.getFieldProps("name")}
          />

          <ValidityGuidelines isError>{formik.getFieldMeta("name").error}</ValidityGuidelines>
        </FormInputWrapper>

        <FormInputWrapper>
          <FormLabel>이메일</FormLabel>
          <SignInput
            isError={formik.getFieldMeta("email").error}
            type="email"
            placeholder="name@address.com"
            required
            {...formik.getFieldProps("email")}
          />

          <ValidityGuidelines isError>{formik.getFieldMeta("email").error}</ValidityGuidelines>
        </FormInputWrapper>

        <FormInputWrapper>
          <FormLabel>비밀번호</FormLabel>
          <PasswordInputWrapper>
            <SignInput
              style={{ paddingRight: 52 }}
              isError={formik.getFieldMeta("password").error}
              type={isPasswordShow ? "text" : "password"}
              required
              name="password"
              {...formik.getFieldProps("password")}
            />

            <PasswordShowButton
              style={{ position: "absolute", right: 12, top: 7 }}
              onClick={handleShowPassword}
            >
              {isPasswordShow ? HideEye : ShowEye}
            </PasswordShowButton>
          </PasswordInputWrapper>

          <ValidityGuidelines isError={formik.getFieldMeta("password").error}>
            6-20자 이내의 대문자, 소문자, 숫자, 특수문자가 각 1개 이상 포함된 비밀번호를 만들어
            주세요.
          </ValidityGuidelines>
        </FormInputWrapper>

        <FormInputWrapper>
          <FormLabel>비밀번호 확인</FormLabel>
          <SignInput
            isError={formik.getFieldMeta("confirmPassword").error}
            type="password"
            required
            {...formik.getFieldProps("confirmPassword")}
          />

          <ValidityGuidelines isError>
            {formik.getFieldMeta("confirmPassword").error}
          </ValidityGuidelines>
        </FormInputWrapper>

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

        <SignButtonContainer>
          <SignButton type="submit">가입하기</SignButton>

          <p>또는</p>

          <GithubSignButton onClick={onGithubClick}>
            {GithubIcon}
            <span>GitHub 계정으로 가입하기</span>
          </GithubSignButton>

          <Link href="/login">
            <GoSignIn>이미 계정이 있으신가요?</GoSignIn>
          </Link>
        </SignButtonContainer>
      </form>
    </SignContainer>
  );
};

export default Sign;

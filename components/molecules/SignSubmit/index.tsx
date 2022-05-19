import Link from "next/link";
import React from "react";
import { GithubIcon } from "../../../public/assets/SvgIcons";
import { SignButtonContainer, SignButton, GithubSignButton, GoSign } from "./styles";

interface SignButtonContainerProps {
  currentPageName: "SignUp" | "SignIn";
}

const index: React.FC<SignButtonContainerProps> = (props) => {
  const onGithubClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return props.currentPageName === "SignUp" ? (
    <SignButtonContainer>
      <SignButton type="submit">가입하기</SignButton>

      <p>또는</p>

      <GithubSignButton onClick={onGithubClick}>
        {GithubIcon}
        <span>GitHub 계정으로 가입하기</span>
      </GithubSignButton>

      <Link href="/signin">
        <GoSign>이미 계정이 있으신가요?</GoSign>
      </Link>
    </SignButtonContainer>
  ) : (
    <SignButtonContainer>
      <SignButton type="submit">로그인</SignButton>

      <p>또는</p>

      <GithubSignButton onClick={onGithubClick}>
        {GithubIcon}
        <span>GitHub 계정으로 로그인하기</span>
      </GithubSignButton>

      <Link href="/signup">
        <GoSign>아직 계정이 없으신가요?</GoSign>
      </Link>
    </SignButtonContainer>
  );
};

export default index;

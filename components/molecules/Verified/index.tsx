import React from "react";
import { VerifiedIcon } from "../../../assets/SvgIcons";
import { Verified, VerifiedContainer } from "./styles";

const index = () => {
  return (
    <VerifiedContainer>
      {VerifiedIcon}
      <Verified>채택됨</Verified>
    </VerifiedContainer>
  );
};

export default index;

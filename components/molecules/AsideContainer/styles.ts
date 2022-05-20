import styled from "styled-components";
import Button from "../../atoms/Button";

export const AsideTitle = styled.h4`
  ${(props) => props.theme.typography.Captions};
  height: 15px;
`;

export const AsideHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`;

export const AsideChildren = styled.div`
  width: 220px;
`;

export const AsideWrapper = styled.article`
  padding-top: 18px;
`;

export const AsideSubButtonStyle = {
  color: "#FF8F00",
  height: "15px",
  padding: 0,
  lineHeight: "14.06px",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 12,
};

export const AsideMoreButton = styled(Button)`
  ${(props) => props.theme.typography.Footnote2};
  color: #ff8f00;
  height: 15px;
  padding: 0;
`;

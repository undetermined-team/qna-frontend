import styled from "styled-components";

export const AsideTitle = styled.h4`
  ${(props) => props.theme.typography.Captions};
  height: 15px;
`;

export const AsideHeader = styled.header`
  position: relative;
  margin-bottom: 9px;
`;

export const AsideChildren = styled.div`
  width: 220px;
`;

export const AsideWrapper = styled.article`
  padding-top: 18px;
`;

export const AsideSubButtonStyle = {
  position: "absolute",
  color: "#FF8F00",
  height: "15px",
  right: 0,
  bottom: 5,
  padding: 0,
  lineHeight: "14.06px",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 12,
};

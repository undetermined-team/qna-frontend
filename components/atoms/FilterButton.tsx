import { styled as muiStyled } from "@mui/system";
import { Button } from "@mui/material";

export const FilterButton = muiStyled(Button)(({ theme }) => ({
  fontFamily: "pretendard",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
  textAlign: "center",
  borderRadius: 2,
  boxShadow: "none",
  lineHeight: "normal",

  "&:hover": {
    backgroundColor: "#fff",
  },
  "&:active": {
    backgroundColor: "#fff",
  },
}));

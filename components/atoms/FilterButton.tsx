import { styled as muiStyled } from "@mui/system";
import { Button } from "@mui/material";

export const FilterButton = muiStyled(Button)(({ theme }) => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
  textAlign: "center",
  borderRadius: 2,
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "#fff",
  },
  "&:active": {
    backgroundColor: "#fff",
  },
}));

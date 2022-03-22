import { styled as muiStyled } from "@mui/system";
import { Button } from "@mui/material";

export const FilterButton = muiStyled(Button)(({ theme }) => ({
  marginRight: 4,
  padding: "10px 17px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
  textAlign: "center",
  borderRadius: 2,

  "&:hover": {
    backgroundColor: "#fff",
  },
  "&:active": {
    backgroundColor: "#fff",
  },
}));

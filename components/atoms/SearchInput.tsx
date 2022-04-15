import { styled as muiStyled } from "@mui/system";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";

export const SearchInput = muiStyled(InputBase)<InputBaseProps>(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.Gray100,
    border: `1px solid ${theme.palette.Gray200}`,
    fontSize: 14,
    fontWeight: 400,
    color: theme.palette.Gray900,
    paddingRight: "45px !important",

    "&::placeholder": {
      color: theme.palette.Gray400,
      opacity: 1,
    },

    ":focus": {
      color: "black",
      borderColor: theme.palette.Gray500,
      backgroundColor: "#fff",
    },
  },
}));

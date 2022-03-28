import { styled as muiStyled } from "@mui/system";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";

export const SearchInput = muiStyled(InputBase)<InputBaseProps>(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.Gray100,
    border: `1px solid ${theme.palette.Gray200}`,
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 28,
    color: theme.palette.Gray400,
    paddingRight: "45px !important",

    "&::placeholder": {
      color: theme.palette.Gray400,
      opacity: 1,
    },
  },
}));

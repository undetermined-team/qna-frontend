import { styled as muiStyled } from "@mui/system";
import { Chip, ChipProps } from "@mui/material";

export const Tag = muiStyled(Chip)<ChipProps>(({ theme }) => ({
  marginRight: 8,
  borderRadius: 2,
  height: 22,
  backgroundColor: theme.palette.BlueGray50,

  ".MuiChip-label": {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 11,
    color: theme.palette.BlueGray600,
    textAlign: "center",
    padding: "4px 16px 5px 10px",
  },
  ".MuiChip-deleteIcon": {
    cursor: "pointer",
  },
}));

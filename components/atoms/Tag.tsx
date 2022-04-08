import { styled as muiStyled } from "@mui/system";
import { Chip, ChipProps } from "@mui/material";

export const Tag = muiStyled(Chip)<ChipProps>(({ theme }) => ({
  borderRadius: 2,
  height: 22,
  backgroundColor: theme.palette.BlueGray50,

  "&:hover": {
    backgroundColor: theme.palette.BlueGray100,
  },
  "&:foucus": {
    backgroundColor: theme.palette.BlueGray100,
  },

  ".MuiChip-label": {
    fontStyle: "normal",
    fontSize: 11,
    color: theme.palette.BlueGray600,
    textAlign: "center",
    padding: "4px 10px",
    lineHeight: "13px",

    "&:hover": {
      color: theme.palette.BlueGray800,
    },
    "&:foucus": {
      color: theme.palette.BlueGray800,
    },
  },

  ".MuiChip-deleteIcon": {
    marginLeft: "-4px",
    cursor: "pointer",

    "&:hover": {
      path: {
        stroke: theme.palette.BlueGray800,
      },
    },
    "&:foucus": {
      path: {
        stroke: theme.palette.BlueGray800,
      },
    },
  },
}));

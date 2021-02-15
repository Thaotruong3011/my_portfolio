import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    work__header: {
      fontFamily: "SFMono",
      fontWeight: "700",
      //   width: "fit-content",
      display: "flex",
      alignItems: "center",

      "&::after": {
        content: "''",
        backgroundColor: "#8892b0",
        display: "block",
        height: "1px",
        width: "25%",
        marginLeft: "10px",
      },
    },
    subtitle: {
      color: theme.palette.green,
      paddingRight: "10px",
    },
    linkItem: {
      "& a": {
        backgroundColor: "transparent !important",
        borderLeft: "2px solid #8892b0",
        borderRadius: "0 !important",
        color: " #8892b0 !important",
        "&:active": {
          backgroundColor: "transparent  !important",
          color: `${theme.palette.green} !important`,
          borderLeft: `2px solid ${theme.palette.green}`,
        },
        "&:focus": {
          color: `${theme.palette.green} !important`,
          borderLeft: `2px solid ${theme.palette.green}`,
        },
      },
    },
  };
});
export default useStyles;

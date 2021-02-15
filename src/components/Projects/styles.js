import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    Projects__header: {
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
    project_block: {
      backgroundColor: "rgba(41, 61, 90, 0.99)",
      minHeight: "300px",
    },
    IconBlock: {
      display: "flex",
      justifyContent: "space-between",
    },
    icon: {
      width: "30px",
      height: "30px",
    },
    projectName: {
      fontWeight: "700",
      color: theme.palette.green,
    },
    tech: {
      padding: "0 5px",
      fontSize: "13px",
      fontFamily: "Calibre",
    },
    btnTest: {
      background: "transparent",
      border: "1px solid #8892b0",
      "&:hover": {
        background: "transparent",
        border: `1px solid ${theme.palette.green}`,
      },
      "&:focus": {
        background: "transparent",
      },
      "&:active": {
        background: "transparent",
      },
    },
  };
});
export default useStyles;
